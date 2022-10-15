import React from 'react';
import Options from '../options/Options';
import './QuizDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizDetails = ({ quiz }) => {
    const { question } = quiz;
    // console.log(quiz.correctAnswer)
    const toaster =()=>toast(quiz.correctAnswer)
    return (
        <div className='border container p-5 my-5 background-color text-light shadow-lg fw-bold w-auto'>
            <FontAwesomeIcon onClick={toaster} className='text-danger me-5' icon={faEye} />
            {question}
            <div className='mt-5'>
            {
                quiz.options.map(option =><Options option={option} quiz={quiz}></Options>)
            }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;