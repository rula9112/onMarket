'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../../../redux/authSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {token} = useSelector(state => state.auth);
  const {status} = useSelector(state => state.auth);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile());
    }
  }, [token, user, dispatch]);

  if (!token) {
    return <p>Please login to see your profile.</p>;
  }

  if (status === 'success') {
    return <p>Loading profile...</p>;
  }

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {/* render other user info */}
    </div>
  );
};

export default UserProfile;
