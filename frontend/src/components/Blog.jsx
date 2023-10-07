import { useState } from 'react';

const Blog = ({ blog }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <button onClick={() => setShowFullDetails(!showFullDetails)}>
        {showFullDetails ? 'hide' : 'view'}
      </button>
      {showFullDetails && (
        <>
          <a href={blog.url} target="_blank" style={{ display: 'block' }}>
            {blog.url}
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <p style={{ margin: 2 }}>likes {blog.likes}</p>
            <button>like</button>
          </div>
          <p style={{ margin: 2 }}>{blog.user.username}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
