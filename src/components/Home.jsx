import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='my-container grid grid-cols-2 '>
            <div>
                <h1 className='text-7xl font-semibold tracking-wide leading-snug'>
                    Find here your 
                    <br />
                    <span className='text-purple-600'>Dream</span> job
                </h1>
                <p className='my-4 sm:my-8'>
                    The first and leading career management site in the country with in-depth understanding of the needs of job seekers and employers.
                </p>
                <Link to={'/blog'}><button className='btn'>Get Started</button></Link>
            </div>
            <img src="/src/assets/cover-pic.jpg" className='rounded-lg' alt="" />
        </div>
    );
};

export default Home;