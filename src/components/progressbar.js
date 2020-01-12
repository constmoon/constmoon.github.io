import React from "react";
import "@styles/progressbar.scss";

const Range = (props) => {
  return <div className="range" style={{ width: `${props.percentage}%` }} />
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentage={props.percentage} />
    </div>
  );
};

const CalculatePercentage = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startDate = new Date(currentYear, 0, 0);
  const diff = currentDate - startDate;
  const day = 1000 * 60 * 60 * 24;
  const daysInYear = Math.floor(diff / day);
  const percentage = Math.round((daysInYear / 365 * 100) * 10) / 10;

  return [currentYear, percentage];
};

const ProgressBarComponent = () => {
  const [currentYear, percentage] = CalculatePercentage();

  return (
    <>
      <div className="progress-container">
        <ProgressBar percentage={percentage} />
      </div>
      <p className="progress-info">{currentYear} is {percentage}% complete.</p>
    </>
  );
};

export default ProgressBarComponent;