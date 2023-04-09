import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>CareerPortal</h1>

            {/* Nav Items Section */}
            <div className='items-center space-x-4 lg:flex'>
                <NavLink to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Home
                </NavLink>
                <NavLink to='/statistics'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Statistics
                </NavLink>
                <NavLink to='/jobCategory'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Jobs Category
                </NavLink>
                <NavLink to='/appliedJobs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Applied Jobs
                </NavLink>
                <NavLink to='/blog'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Blogs
                </NavLink>
            </div>


            {/* btn part */}
            <Link to={'/featuredJobs'}><button className='btn'>Start Applying</button></Link>
        </nav>
    );
};

export default Header;