import React from 'react';

const JobCategoryItem = ({category}) => {
    const {id, title, logo, numberOfJobsAvailable} = category

    return (
        <div className='bg-slate-50 text-left m-4 p-8 rounded-md space-y-4'>
            <img className='bg-slate-200 p-4 mb-8 rounded-lg' src={logo} alt="" />
            <h3 className='text-xl font-bold'>{title}</h3>
            <p>{numberOfJobsAvailable}+ Jobs Available</p>
        </div>
    );
};

export default JobCategoryItem;