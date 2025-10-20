import React from "react";
import Rating from "./Rating";

const OpinionsClient = ({ opinionClient }) => {
  return (
    <div className="opinionBox">
      <div className="opinionCard">
        <p className="opinionText">“{opinionClient.opinion}”</p>

        <div className="opinionFooter">
          <div className="clientInfo">
            <h4 className="clientName">{opinionClient.clientName}</h4>
            </div>
            <div className="opinionLine"></div>
            <div className="ratingWrapper">
            <Rating rating={opinionClient.ratings} />
            <span className="clientJob">{opinionClient.JobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsClient;
