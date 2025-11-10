import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    let { signInUser } = use(AuthContext)

    let handleSubmit = (e) => {

        e.preventDefault()

        let email = e.target.email.value;
        let password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                alert('LoggedIn Successfully!')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg">
                <div className="card-body px-10">
                    <div className="text-center mt-10">
                        <h1 className="text-3xl font-bold">Login your account!</h1>
                    </div>
                    <div className='my-10'>
                        <hr className='border-base-300' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset mb-3 space-y-2">

                            <label className="label font-semibold text-black">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Enter your email" />

                            <label className="label font-semibold text-black">Password</label>
                            <input name='password' type="password" className="input w-full" placeholder="Password" />

                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <div><Link to='/auth/register'>New to our Webisite? <span className='text-secondary'>Register Now!</span> </Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;