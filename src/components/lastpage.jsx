import React from 'react';
import { useSelector } from 'react-redux';
import "./lastpage.css"

const LastPage = () => {
  const { userName, userAge } = useSelector((state) => state.enrollment);

  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    <div className='lastPage'>
      <h1 className='lastH1'>Your name {userName} age {userAge} has been added to the Ratham Student Info System. You may exit now.</h1>
    </div>
    </div>
  );
};

export default LastPage;

