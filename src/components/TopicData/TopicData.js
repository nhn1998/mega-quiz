import React from 'react';
import { Link } from 'react-router-dom';
import './TopicData.css'
const TopicData = ({ topic }) => {
    const { name, logo , id} = topic;
    console.log(topic)
    return (
        <div className='mx-auto my-5 p-3 background media'>
            <div className=''>
                <img className='img-fluid' src={logo} alt="" />
            <div className='d-flex mt-3'>
            <h3 className='fs-5'>{name}</h3>
            <Link className='btn btn-primary ms-auto' to={`quiz/${id}`}>Start Quiz</Link>
            </div>
            </div>
        </div>
    );
};

export default TopicData;