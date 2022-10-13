import React from 'react';
import './TopicData.css'
const TopicData = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='mx-auto my-5 p-3 background media'>
            <div className=''>
                <img className='img-fluid' src={logo} alt="" />
            <div className='d-flex mt-3'>
            <h3 className='fs-5'>{name}</h3>
            <button className='btn btn-primary ms-auto'>Start Quiz</button>
            </div>
            </div>
        </div>
    );
};

export default TopicData;