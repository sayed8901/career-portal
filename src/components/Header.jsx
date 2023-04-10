import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container justify-between md:flex items-center sticky top-0 bg-slate-50 gap-4'>

            <div className='flex justify-between items-center md:gap-4 lg:gap-60 mb-2'>
                <Link to={'/'} title='Home page'>
                    <h1 className='text-3xl font-bold gap-4'>CareerPortal</h1>
                </Link>

                {/* btn part */}
                <Link to={'/featuredJobs'} title='Click here to find & apply'>
                    <button className='btn btn-bg'>Start Applying</button>
                </Link>
            </div>


            {/* Nav Items Section */}
            <div className='items-center text-sm sm:text-base flex justify-around text-center space-x-2 lg:space-x-8'>
                <NavLink to='/' title='Home page'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Home
                </NavLink>
                <NavLink to='/featuredJobs' title='Click to see all available jobs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > All_Jobs
                </NavLink>
                <NavLink to='/appliedJobs' title='Already applied jobs list'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Applied_Jobs
                </NavLink>
                <NavLink to='/statistics' title='Click to see graphical presentation'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Statistics
                </NavLink>
                <NavLink to='/blog' title='Click here to read more'
                    className={({ isActive }) => (isActive ? 'active' : 'default')} > Blogs
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;