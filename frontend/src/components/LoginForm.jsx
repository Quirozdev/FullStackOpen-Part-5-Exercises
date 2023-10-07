const LoginForm = ({
  handleLogin,
  usernameValue,
  handleUsernameChange,
  passwordValue,
  handlePasswordChange,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>Log in to application</h2>
      <div>
        username{' '}
        <input
          type="text"
          name="username"
          value={usernameValue}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        password{' '}
        <input
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
