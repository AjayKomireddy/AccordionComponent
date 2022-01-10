import React from 'react';
import './Accordion.css';


function Accordian(props){
    const {AccData} = props;
    
    return (
      <>
        <div className="container">
          <div className="head">
            <div className="title">{AccData.title}</div>
            <div className="btn" >{">"}</div>
          </div>
           <p className="data">{AccData.body}</p>
        </div>
      </>
    );
}

export default Accordian; 