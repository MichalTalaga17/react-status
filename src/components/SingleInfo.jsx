import React from "react";
import "../App.css";

const SingleInfo = ({ infoName, infoDetails }) => {
  
  

  return (
    <div className={"w-100 text-center py-1 px-2"}><span className={"tracking__main--info-name"}>{infoName}</span> {infoDetails}</div>
  );
};

export default SingleInfo;
