import React, { useState } from "react";
import "./Service.css"

const Accordion = ({ heading, answer }) => {
    const [show, setShow] = useState(false);
    return (
        
        <>
            <div className="main-heading">
            <p  className="plus" onClick={()=>setShow(!show)}>➕</p>
            <h3>{heading}</h3>   
            </div>
            {show && <p>{answer}</p>}
        </>
    )
}
export default Accordion;