import React from "react";
import "../App.css";

const SingleStep = ({ StepStatus, StepIcon, StepTitle }) => {
  
  

  return (
    <div className={`tracking__step ${StepStatus}`}>
      <div className={"step-icon-wrap"}>
      <div className={`step-icon`}><i className={`${StepIcon}`}></i></div>
      </div>
      <h4 className={"step-title"}>{StepTitle}</h4>
    </div>
  );
};

export default SingleStep;
