import React from 'react';

function Button(props) {
  return (
    <button 
      className={`btn btn-outline-${props.theme} btn-block`} 
      onClick={() => props.handleButtonClick(props.action, props.actionBy)}
    >
      {props.text}
    </button>
  );
}

export default Button;
