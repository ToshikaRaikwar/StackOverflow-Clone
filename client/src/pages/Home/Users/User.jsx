import React from "react";
import { Link } from "react-router-dom";
import './Users.css'

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-profile">
      <h3>{user.name.charAt(0).toUpperCase()}</h3>
      <h5>{user.className}</h5>
    </Link>
  );
}

export default User;
