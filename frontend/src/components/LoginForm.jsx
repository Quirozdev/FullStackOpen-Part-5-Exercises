import PropTypes from 'prop-types';

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

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default LoginForm;
