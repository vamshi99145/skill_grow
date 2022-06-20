import React from 'react'
const Contact = () => {
    const captcha = Math.floor(Math.random() * 100000);
    //console.log(captcha)
    return (
        <div className="container contact">
            <div className="row">
                <div className="col-md-8 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4">
                        <h1 className="text-center bg-dark text-white display-4 d-inline-block">Login</h1>
                        <div className="form-group my-5">
                            <div className="row">
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="text" className="form-control-lg" placeholder="Email Address" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <div className="row">
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="email" className="form-control-lg" placeholder="Password" required />
                                </div>
                                {/* <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="tel" className="form-control-lg" placeholder="Password" required />
                                </div> */}
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <div className="row">
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <button className="btn btn-outline-dark btn-lg btn-block">Captcha - ${captcha}</button>
                                </div>
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="tel" className="form-control-lg" placeholder="Enter Captcha code" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-5" style={{ color: '#018CE3' }}>
                            By clicking “Login”, you agree to our terms of
                            service, privacy policy and cookie policy
                        </div>
                        <div className="mt-5 col-md-6 col-12 mx-auto">
                            <button className="btn btn-outline-dark btn-lg btn-block">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact