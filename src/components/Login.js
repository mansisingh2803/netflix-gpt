import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg" />
            </div>
            <form className='p-12 bg-black absolute w-3/12  my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 '>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-3 my-2 w-full bg-[#101010] rounded-sm text-sm text-[#B8B8B8]' />)}
                <input type='text' placeholder='Email or Phone Number' className='p-3 my-2 w-full bg-[#101010] rounded-sm text-sm text-[#B8B8B8]' />
                <input type='password' placeholder='Password' className='p-3 my-2 w-full bg-[#101010] rounded-sm text-sm text-[#B8B8B8]' />
                <button className='p-3 my-2 bg-[#E50914] w-full rounded-sm text-sm'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 text-xs text-[#B8B8B8]'>
                    New to Netflix?
                    <span
                        className='text-white font-bold-100 underline underline-offset-4 cursor-pointer'
                        onClick={toggleSignInForm}>
                        {isSignInForm ? " Sign Up" : " Sign In"}
                    </span></p>
            </form>
        </div>
    )
}

export default Login