import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import QuestionDetails from './QuestionDetails';
import Avatar from '../../../components/Avatar/Avatar';
import moment from 'moment'
import { deleteAnswer } from '../../../../src/actions/question';
import './Questions.css'

const DisplayAnswer = ({question,handleShare}) => {
  const User=useSelector((state)=>(state.currentUserReducer))
  const { id } = useParams();
  const dispatch=useDispatch()
const handledelete=(answerId,noOfAnswers)=>{
  dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
}

  return (
    <div>
      {QuestionDetails.answer && QuestionDetails.answer.map((ans) => {
        return (
          <div className='display-ans' key={ans.id}>
            <p>{ans.answerBody}</p>
            <div className='question-actions-user'>
              <div>
                <button type='button' onClick={handleShare}>Share</button>
                {
        User?.result?._id===ans?.userId&& (
            <button type='button' onClick={()=>handledelete(ans._id,question.noOfAnswers)}>Delete</button>
        )
       }
              </div>

              <div>
                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                <Link
                  to={`/Users/${ans.userID}`}
                  className='user-link'
                  style={{ color: '#0086d8' }}>
                  <Avatar backgroundColor='green' px='8px' py='5px'>
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>{ans.userAnswered}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAnswer;
