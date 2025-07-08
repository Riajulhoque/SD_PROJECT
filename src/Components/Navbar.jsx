import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import dropdown from './dropdown';


const Navbar = () => {

    const{user ,logOut} =use(AuthContext);
    const handleLogOut =() =>{
        // console.log('user trying to logout ')
        logOut().then(()=>{
            alert('You logged out successfully')
        })
        .catch((error)=>{
            // console.log(error);
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div> {user && user.email}</div>
            <dropdown></dropdown>
            <div className='nav flex gap-5 p-3 text-accent'>
                <NavLink to='/'><a href="" className='p-5'>Home</a></NavLink>
                <NavLink to='/aboutUs'><a href="" className='p-5 '>About Us</a></NavLink>
                <NavLink to='/career'><a href="" className='p-5 '>Career</a></NavLink>
            </div>
            <div className='login-btn flex gap-5 '>
                <img className='w-12 rounded-full' src={`${user ? use.photoURL :userIcon }`} alt="" />
                {
                    user ?
                    ( <button onClick={handleLogOut} className='btn btn-primary px-10 ' >LogOut</button>) :
                     ( <Link to='/auth/login' className='btn btn-primary px-10 '>Login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;