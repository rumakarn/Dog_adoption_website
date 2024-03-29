import React, { useState } from "react";
import Ques from "./Questions";
import "./Service.css";
import Accordion from "./Accordian";

const Service = (props) => {
  const [data] = useState(Ques); // Removed unused `setData`
  return (
    <>
      <section className="Service-sec">
        <div className="main-div">
          <h2 className="sec-h2">Let's get you answered.</h2>
          <div className="Accordion">
            {data.map((val) => {
              const { id } = val;
              return <Accordion key={id} {...val} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
