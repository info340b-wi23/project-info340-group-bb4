import React  from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';




export function validatePasswordMatch(){
    if(document.querySelector('#passwordInput').value !== document.querySelector('#passwordConfirmInput').value){
      document.querySelector('#passwordConfirmInput').setCustomValidity("Passwords do not match");
      document.querySelector("#passwordConfirmFeedback").textContent = "Passwords do not match";
    } else{
      document.querySelector('#passwordConfirmInput').setCustomValidity("");
      document.querySelector("#passwordConfirmFeedback").textContent = "";
    }
  
}


export default function Login(props) {

    return(
        <div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="img/logo.png" className="img-fluid" alt="logo"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form id="signUpForm" className="form" noValidate>
                                {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                        {/* <FontAwesomeIcon icon="fa-brands fa-google" /> 
                                    </button>
                                </div> 
                    
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div> */}
                    
                                {/* <!-- email --> */}
                                <div className="input-group row mb-3">
                                    <label htmlFor="emailInput" className="form-label">Email Address</label>
                                    <div className="col-lg-11">
                                        <input type="email" id="emailInput" className="form-control form-control-lg" placeholder="Enter a valid email address" required/>
                                        <div className="invalid-feedback">Please provide a valid email</div>
                                    </div>
                                </div>

                                {/* <!-- password --> */}
                                <div className="input-group row mb-3">
                                    <label htmlFor="passwordInput" className="form-label">Password</label>
                                    <div className="col-lg-11">
                                        <input type="password" id="passwordInput" className="form-control form-control-lg" minLength={6} placeholder="Enter password" required/>
                                        <div id="passwordFeedback" className="invalid-feedback">Password must be at least 6 characters</div>
                                    </div>
                                </div>

                                {/* <!-- confrim password --> */}
                                <div className="input-group row mb-3">
                                    <label htmlFor="passwordConfirmInput" className="form-label">Confirm Password</label>
                                    <div className="col-lg-11">
                                        <input type="password" id="passwordConfirmInput" className="form-control form-control-lg" required/>
                                        <div id="passwordConfirmFeedback" className="invalid-feedback"></div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                        </label>
                                    </div>
                                </div>
                    
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="register.html"
                                        className="link-danger">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>   
        </div>
    );
}