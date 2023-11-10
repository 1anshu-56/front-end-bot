import React, { useState } from "react";
import './calender.css'

const Calender = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = Array.from({ length: 4 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    props.actionProvider.selectDateHandler(formattedDate);
  };

  const handlePrevClick = () => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() - 1);
    setStartDate(date);
  };

  const handleNextClick = () => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + 1);
    setStartDate(date);
  };

  return (
    <div className="options-container">
      <button onClick={handlePrevClick} className="option-btn">{"<"}</button>
      {dates.map((date, index) => (
        <button
          key={index}
          onClick={() => handleDateClick(date)}
          className={`option-button ${selectedDate && selectedDate.getTime() === date.getTime() ? 'selected' : ''}`}
        >
          {date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
        </button>
      ))}
      <button onClick={handleNextClick} className="option-btn">{">"}</button>
    </div>
  );
};

export default Calender;
