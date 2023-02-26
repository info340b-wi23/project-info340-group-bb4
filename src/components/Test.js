import React, { useState }  from 'react';

export function Test(props) {

    return(
        <div>
            <section className='vh-100'>
                <div className='container-fluid h-custom'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-md-9 col-lg-6 col-xl-5'>
                            <img src="img/logo.png" className="img-fluid" alt="logo"/>
                        </div>
                        <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
                            <form id="signUpForm" className="form" noValidate>
                                //
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

