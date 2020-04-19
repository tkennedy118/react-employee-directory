import React from 'react';

function Button(props) {
  return (
    <button 
      className={`btn btn-${props.theme}`} 
      onClick={() => props.handleButtonClick(props.action, props.actionBy)}
    >
      {props.text}
    </button>
  );
}

export default Button;
