import React from 'react'
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
function Register() {
  return (
    <div className=" container layout-login-centered-boxed">


    <div className="layout-login-centered-boxed__form">
        <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-4 navbar-light">
            <a href="/" className="navbar-brand text-center mb-2 mr-0 flex-column">

                <span className="mt-2">Create an account</span>
            </a>
        </div>
        <div className="card card-body">
          
                    <form action="/register" method="POST">
                        <div className="form-group">
                            <label className="text-label" for="name_2">Name:</label>
                            <div className="input-group input-group-merge">
                                <input id="name_2" type="text" required name="username"
                                    className="form-control form-control-prepended" placeholder="John Doe"></input>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="far fa-user"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-label" for="email_2">Phone:</label>
                            <div className="input-group input-group-merge">
                                <input id="email_2" type="text" required name="phone"
                                    className="form-control form-control-prepended" placeholder="0700443355"></input>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="far fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-label" for="email_2">Email Address:</label>
                            <div className="input-group input-group-merge">
                                <input id="email_2" type="email" required name="email"
                                    className="form-control form-control-prepended" placeholder="john@doe.com"></input>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="far fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-label" for="password_2">Password:</label>
                            <div className="input-group input-group-merge">
                                <input id="password_2" type="password" name="password" required
                                    className="form-control form-control-prepended" placeholder="Enter your password"></input>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="far fa-key"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-label" for="password_2">Retype
                                Password:</label>
                            <div className="input-group input-group-merge">
                                <input id="password_2" type="password" name="repassword" required
                                    className="form-control form-control-prepended" placeholder="Enter your password"></input>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="far fa-key"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary mb-2" type="submit">Create
                                Account</button><br></br>
                            <span>Have an account?</span> <a className="text-body text-underline" href="/">
                                Login</a>
                        </div>
                    </form>
        </div>
    </div>

</div>
  )
}

export default Register