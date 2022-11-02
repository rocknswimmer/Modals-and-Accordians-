import React from 'react';
import {useState} from 'react';
import './accordion.css';

const Accordion = ({title, content}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </React.Fragment>
  );
};

export default Accordion;