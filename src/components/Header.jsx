import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container justify-between lg:flex items-center sticky top-0 bg-slate-50'>
            <div className='flex justify-between items-center sm:gap-36 lg:gap-60 mb-2 md:order-last'>
                <h1 className='text-3xl font-bold gap-4'>CareerPortal</h1>

                {/* btn part */}
                <Link to={'/featuredJobs'}><button className='btn'>Start Applying</button></Link>
            </div>


            {/* Nav Items Section */}
            <div className='items-center text-sm sm:text-base flex justify-around text-center space-x-2 sm:space-x-4 md:space-x-8'>
                <NavLink to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Home
                </NavLink>
                <NavLink to='/statistics'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Statistics
                </NavLink>
                <NavLink to='/jobCategory'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Category
                </NavLink>
                <NavLink to='/appliedJobs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > AppliedJobs
                </NavLink>
                <NavLink to='/blog'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Blogs
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;