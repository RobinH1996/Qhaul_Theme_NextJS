import Link from 'next/link';
import React from 'react';

const LoginSection = () => {
    return (
        <div className="bd-login__area pt-115 pb-130">
            <div className="container small-container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="Login-form-wrapper">
                            <div className="bd-postbox__contact">
                                <form action='#'>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Email or UserName" required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="bd-postbox__singel-input">
                                                <input type="password" placeholder="Password" required />
                                            </div>
                                        </div>
                                        <div className="signup-action">
                                            <div className="signup-action-check">
                                                <input className="e-check-input" type="checkbox" id="sing-up" />
                                                <label className="sign-check" htmlFor="sing-up"><span>Remember me</span></label>
                                            </div>
                                        </div>
                                        <div className="bd-sigin__action-button mb-20">
                                            <button className="bd-fill__btn w-100">Login now</button>
                                        </div>
                                        <div className="bd-registered__wrapper">
                                            <div className="not-register">
                                                <span>Not registered?</span><span><Link href="/registration"><a>Sign up</a></Link></span>
                                            </div>
                                            <div className="forget-password">
                                                <span>Forgot password?</span>
                                            </div>
                                        </div>
                                        <div className="bd-resister__bottom-text text-center">
                                            <div className="bd-sign__social-text">
                                                <span>Or Sign- in with</span>
                                            </div>
                                            <div className="bd-sign__social-icon">
                                                <a href="https://www.facebook.com">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                    <span>Facebook</span>
                                                </a>
                                                <a href="https://www.gmail.com">
                                                    <i className="fa-solid fa-envelope-open"></i>
                                                    <span>Google</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSection;