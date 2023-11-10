import React, { useState } from "react";
//import "./time.css";

const TimeSlots = (props) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = {
    morning: ["9:00AM", "10:00AM", "11:00AM"],
    afternoon: ["12:00PM", "2:00PM", "3:00PM", "4:00PM"],
    evening: ["5:00PM", "6:00PM", "7:00PM"]
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
    props.actionProvider.selectTimeSlotHandler(time);
  };

  return (
    <div className="time-container">
      {Object.entries(timeSlots).map(([section, times]) => (
        <div key={section}>
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          {times.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSlotClick(time)}
              className={`time-button ${selectedTime === time ? 'selected' : ''}`}
            >
              {time}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
