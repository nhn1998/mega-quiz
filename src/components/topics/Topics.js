import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicData from '../TopicData/TopicData';
import './Topics.css';
import img from './img1.jpg'
const Topics = () => {
    const topics = useLoaderData();

    return (
        <div>
            <div className='mb-5 container'>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div>
                    <h1><span className='text-success'>Quiz</span><span className='text-info'>Topics</span> </h1>
                    <p>There have some topics about programming languages .Where you can select and can play quiz.</p>
                </div>
            </div>
            <div className='d-lg-flex d-sm-block d-md-flex text-light gap-5 alignment container'>
                {
                    topics.data.map(topic => <TopicData key={topic.id} topic={topic}></TopicData>)
                }
            </div>
        </div>
    );
};

export default Topics;