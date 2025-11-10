import React, { use } from 'react';
import UserIcon from '../assets/user.png'
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const NavBar = () => {

    let { user, logOut } = use(AuthContext)

    let handleLogOut = () => {
        // alert('user trying to logout');
        logOut()
        .then(()=>{
            alert('Logged Out Successfully');
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between mx-36'>
            <div className='w-1/3 flex items-center'>
                {user && user.email}
            </div>
            <div className='w-1/3 flex items-center justify-center'>
                <ul className='flex gap-3 text-base-400'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Career</Link>
                </ul>
            </div>
            <div className='flex gap-3 w-1/3 justify-end'>
                <img src={UserIcon} alt="" />
                {
                    user
                        ?
                        <button onClick={handleLogOut} className='btn btn-primary px-10 py-4 text-white rounded-none shadow-none'>Log Out</button>
                        :
                        <Link to='/auth/login' className='btn btn-primary px-10 py-4 text-white rounded-none shadow-none'>Log in</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;