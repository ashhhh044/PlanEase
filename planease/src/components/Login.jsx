const Login = () => {
  const validateLoginForm = (e) => {
    e.preventDefault();
    // TODO: Add your validation logic here
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username || !password) {
      alert("Please fill in both fields.");
      return false;
    }

    console.log("Logging in with:", username, password);
    // You could navigate or call an API here
    return true;
  };

  return (
    <>
      <section className="background">
        <div className="circle-first"></div>
        <div className="circle-second"></div>
        <div className="circle-third"></div>
        <div className="circle-fourth"></div>
      </section>

      <form className="login-form" onSubmit={validateLoginForm}>
        <p className="login-header">Login</p>

        <label htmlFor="username" style={{ display: 'none' }}>Username or Email</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Email/Username"
          className="login-detail"
          required
        />

        <label htmlFor="password" style={{ display: 'none' }}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="login-detail"
          required
        />

        <input type="submit" value="Login" className="login-button" />

        <p><a href="#">Forgot Password?</a></p>
        <p>Not Registered? <a href="signin">Sign Up Here</a></p>
      </form>
    </>
  );
};

export default Login;
