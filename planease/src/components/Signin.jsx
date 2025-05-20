const Signin = () => {
    return(
        <>
        <section className="background">
        <div className="circle-first"></div>
        <div className="circle-second"></div>
        <div className="circle-third"></div>
        <div className="circle-fourth"></div>
    </section>

    <div className="login-form">
        <p className="login-header">Sign Up</p>
        <input type="text" placeholder="Email/Username" className="login-detail"/>
        <input type="password" placeholder="Password" className="login-detail"/>
        <input type="password" placeholder="Confirm Password" className="login-detail"/>
        <input type="submit" value="Register" className="login-button"/>
        <p>Already Registered? <a href="login">Login Here</a></p>
       
    </div>
        </>
    )
}
export default Signin;