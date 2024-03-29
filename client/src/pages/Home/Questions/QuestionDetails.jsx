import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import upvote from '../../../assessts/up.png';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import downvote from '../../../assessts/down.png';
import './QuestionDetails.css';
import copy from 'react-copy-to-clipboard';
import Avatar from '../../../components/Avatar/Avatar';
import DisplayQuestion from './DisplayQuestion';
import './Questions.css';
import DisplayAnswer from './DisplayAnswers';
import { postAnswer } from '../../../actions/question';
import { deleteQuestion, voteQuestion } from '../../../actions/question';

const QuestionDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);

  const [Answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = 'http://localhost:3000/';

  const handlePosAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert('Login or signup to answer a question');
      Navigate('/Auth');
    } else {
      if (Answer === '') {
        alert('Enter an answer before submitting');
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert('Copied url: ' + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upvote', User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downvote', User.result._id));
  };

  return (
    <div className='question-details-page'>
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question.id}>
                <section className='question-details-container'>
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <img src={upvote} alt='Upvote' width='17' className='votes-icon' onClick={handleUpVote} />
                      <p>
                        {question.upVotes} {question.noOfAnswers} {question.downVotes.length}
                      </p>
                      <img src={downvote} alt='Downvote' width='18' className='votes-icon' onClick={handleDownVote} />
                    </div>
                    <div style={{ width: '100%' }}>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className='question-actions-user'>
                        <div>
                          <button type='button' onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && <button type='button' onClick={handleDelete}>Delete</button>}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link to={`/Users/${question.userID}`} className='user-link' style={{ color: '#0086d8' }}>
                            <Avatar backgroundColor='orange' px={8} py={5}>
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                  </section>
                )}
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form onSubmit={(e) => handlePosAns(e, question.answer.length)}>
                    <textarea name='' cols='30' rows='10' onChange={(e) => setAnswer(e.target.value)}></textarea>
                    <input type='Submit' className='post-ans-btn' value='Post your Answer' />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to='/Tags' key={tag} className='ans-tags'>
                        {tag}
                      </Link>
                    ))}{' '}
                    or
                    <Link to='/AskQuestion' style={{ textDecoration: 'none', color: '009dff' }}>
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
