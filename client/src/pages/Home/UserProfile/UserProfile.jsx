import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import LeftSidebar from '../../../components/LeftSidebar/LeftSidebar';
import Avatar from '../../../components/Avatar/Avatar';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";


import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersSelector);
  const currentProfile = users.find((user) => user._id === id);
  const currentUser = useSelector((state) => state.currentReducer);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize={50}
                px={40}
                py={30}
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                  Joined {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} />
                Edit Profile
              </button>
            )}
          </div>
          {isEditing ? (
            <EditProfileForm currentUser={currentUser} setSwitch={setIsEditing} />
          ) : (
            <ProfileBio currentProfile={currentProfile} />
          )}
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
