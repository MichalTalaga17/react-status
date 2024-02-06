import React from "react";
import "../App.css";

const TrackingTitle = ({ Title, Number }) => {
  
  

  return (
    <div className={"tracking__main--title"}>
        <span class="text-uppercase">{Title} </span>
        <span class="tracking__main--number">{Number}</span>
    </div>
  );
};

export default TrackingTitle;