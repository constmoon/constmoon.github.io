import React from "react";
import "@styles/progressbar.scss";

const Range = props => {
  return <div className="range" style={{ width: `${props.range}%` }} />
};

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <Range range={props.percentage} />
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
  const calculatedPercentage = percentage > 100 ? 100 : percentage;

  return (
    <>
      <div className="progress-container">
        <ProgressBar percentage={calculatedPercentage} />
      </div>
      <p className="progress-info">{currentYear} is {calculatedPercentage}% complete.</p>
    </>
  );
};

export default ProgressBarComponent;