import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import NewBlogForm from './components/NewBlogForm';
import Notification from './components/Notification';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserStr = window.localStorage.getItem('loggedUser');
    if (loggedUserStr) {
      const loggedUser = JSON.parse(loggedUserStr);
      setUser(loggedUser);
      blogService.setToken(loggedUser.token);
    }
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    loginService
      .login({
        username,
        password,
      })
      .then((user) => {
        setUser(user);
        blogService.setToken(user.token);
        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        setMessage({
          text: 'Logged in successfully',
          type: 'success',
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setUsername('');
        setPassword('');
      })
      .catch(() => {
        setMessage({ text: 'wrong username or password', type: 'error' });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  }

  function handleLogout(event) {
    window.localStorage.removeItem('loggedUser');
    setUser(null);
    setMessage({
      text: 'Logged out successfully',
      type: 'success',
    });
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }

  function handleAddNewBlog(event) {
    event.preventDefault();
    blogService
      .create({
        title,
        author,
        url,
      })
      .then((savedBlog) => {
        setBlogs(blogs.concat(savedBlog));
        setMessage({
          text: `a new blog ${savedBlog.title} by ${savedBlog.author} added`,
          type: 'success',
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setTitle('');
        setAuthor('');
        setUrl('');
      })
      .catch((error) => {
        console.log(error);
        setMessage({ text: error.response.data.error, type: 'error' });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  }

  return (
    <div>
      <Notification message={message} />
      {user ? (
        <div>
          <h2>blogs</h2>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>Log out</button>
          <NewBlogForm
            handleCreateNewBlog={handleAddNewBlog}
            titleValue={title}
            handleTitleChange={({ target }) => setTitle(target.value)}
            authorValue={author}
            handleAuthorChange={({ target }) => setAuthor(target.value)}
            urlValue={url}
            handleUrlChange={({ target }) => setUrl(target.value)}
          />
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          usernameValue={username}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          passwordValue={password}
          handlePasswordChange={({ target }) => setPassword(target.value)}
        />
      )}
    </div>
  );
};

export default App;
