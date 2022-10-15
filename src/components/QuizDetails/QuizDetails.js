import React from 'react';
import './QuizDetails.css'
const QuizDetails = ({quiz}) => {
    const {question}=quiz;
    return (
        <div className='border container p-5 my-5 background text-warning fw-bold w-50 w-auto'>
            {question}
        </div>
    );
};

export default QuizDetails;