import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Link from 'next/link';
import React, { useState } from 'react';
import validator from 'validator'
import app from '../../data/firebase.init';


const auth = getAuth(app);

const RegistrationSection = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailBlur = event => {
        const userEmail = event.target.value;
        setUserEmail(userEmail);
        console.log(userEmail);
    }
    const handlePasswordBlur = event => {
        const userPassword = event.target.value;
        setUserPassword(userPassword);
        console.log(userPassword);
    }
    const handleSubmit = event => {
        event.preventDefault();

        // validate password start
        if (!/(?=.*[!@#$&*])/.test(userPassword)) {
            setPasswordError('Please add at least one special character');
            return
        }
        setPasswordError('');
        // validate password end

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUserEmail('');
            setUserPassword('');
        })
        .catch(error =>{
            console.error(error);
            setPasswordError(error.message);
        })
    }

    //for email validation start
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
        setEmailError('')
        } else {
        setEmailError('Enter valid Email!')
        }
    }
    //for email validation end

    return (
        <div className="bd-register__area pt-115 pb-130">
            <div className="container small-container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="signup-form-wrapper">
                            <div className="bd-postbox__contact">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="First Name" required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="bd-postbox__singel-input">
                                                <input onBlur={handleEmailBlur} id="userEmail"
                                                onChange={(e) => validateEmail(e)} type="text" placeholder="Email" required />
                                                <span className='email-error-message'>{emailError}</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="bd-postbox__singel-input">
                                                <input onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                                                <span className='email-error-message'>{passwordError}</span>
                                            </div>
                                        </div>
                                        <div className="signup-action">
                                            <div className="signup-action-check">
                                                <input className="e-check-input" type="checkbox" id="sing-up" />
                                                <label className="sign-check" htmlFor="sing-up"><span>Accept the terms and <a href="#">Privacy
                                                    Policy</a></span></label>
                                            </div>
                                        </div>
                                        <div className="bd-sigin__action-button mb-20">
                                            <button className="bd-fill__btn w-100">Register now</button>
                                        </div>
                                        <div className="bd-resister__bottom-text text-center">
                                            <div className="bd-acount__login-text">
                                                <span>Already have an account? <Link href="/login"><a>Log in</a></Link></span>
                                            </div>
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

export default RegistrationSection;