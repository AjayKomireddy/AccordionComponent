import React from 'react';
import './Accordion.css';
import {useState} from 'react';

function Accordian(props){
    const {AccData} = props;
    const [isActive, setIsActive] = useState(false);
    return (
      <>
        <div className="container">
          <div className="head">
            <div className="title">{AccData.title}</div>
            <div className="btn" onClick={() => setIsActive(!isActive)}>
              {isActive ? "<" : ">"}
            </div>
          </div>
          {isActive && <p className="data">{AccData.body}</p>}
        </div>
      </>
    );
}

export default Accordian; 