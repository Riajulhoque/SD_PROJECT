import React, { use } from 'react';
import { Link } from 'react-router';
import AuthProvider from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn} = use(AuthProvider);
    const handleLogin = e =>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)
        signIn()
        .then(result =>{
            const user = result.user ;
            console.log(user)
        })
        .catch((error) =>{
            const errorMessage = error.message ;
            alert(errorMessage)
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen items-center">
           
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='text-semibold text-2xl text-center'>Login your account</h2>
                    <form  onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            {/* Email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            {/* forget password */}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {/* Button for login */}
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <p className='font-semibold text-center pt-5'>
                                Don't have an Account ? <Link className='text-secondary' to='/auth/register'>Register</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
           
        </div>
    );
};

export default Login;