import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userThunk';

const UserProfile = () => {
  const dispatch = useDispatch();
//   useEffect(() => {
//       console.log("Start - UserProfile ...");
//       dispatch(fetchUsers());
//   }, []);

  const fetchOk = () => {
      console.log(" -- Try to test fetch user successfully: ...");
      dispatch(fetchUsers("userID-Test01"));
  };

  const fetchFail = () => {
        console.log(" -- Try to test fetch user FAIL: ...");
        dispatch(fetchUsers());
  };

  return (
    <div style={{ margin: "30px"}}>
      <button onClick={ fetchOk }>Fetch User - OK (fetchUsers.pending --&gt; fetchUsers.fullfilled)</button>
      <hr />

      <button onClick={ fetchFail }>Fetch User - FAIL (fetchUsers.pending --&gt; fetchUsers.rejected)</button>
    </div>
  )
}

export default UserProfile