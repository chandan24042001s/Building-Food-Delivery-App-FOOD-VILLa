import LoginImage from "./../../assets/login-image.png";

const Login = () => {
  return (
    <div id="login">
      <div id="login-left">
        <img src={LoginImage} alt="" />
      </div>
      <div id="login-right">
        <div id="login-box">
          <h1>Login</h1>
          <label>Email</label>
          <br />
          <input placeholder="username@gmail.com" type="email" />
          <br />
          <label>Password</label>
          <br />
          <input placeholder="Password" type="password" />
          <br />
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
