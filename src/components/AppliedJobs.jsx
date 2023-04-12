import React from 'react';

const AppliedJobs = () => {
    const storedCart = JSON.parse(localStorage.getItem('appliedJobs'));
    console.log(storedCart);

    
    return (
        <div>
            Applied Jobs page
        </div>
    );
};

export default AppliedJobs;