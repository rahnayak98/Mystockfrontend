import React, { useState } from 'react';
// import './FancyClockTimePicker.css';

const Changemarkettime = () => {
    
  const [time, setTime] = useState(new Date());

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 60 }}>
    <div className="fancy-clock-time-picker">
      <div className="fancy-clock-time-picker__face">
        <div className="fancy-clock-time-picker__center"></div>
        <div className="fancy-clock-time-picker__hour-hand"></div>
        <div className="fancy-clock-time-picker__minute-hand"></div>
        <div className="fancy-clock-time-picker__second-hand"></div>
      </div>
      <input
        type="time"
        value={time}
        onChange={handleChange}
        className="fancy-clock-time-picker__input"
        
      />
      </div>
    </div>
  );
};

export default Changemarkettime;
