import React from 'react';

function Jumbotron(props) {
  return <div className={`jumbotron ${props.fluid ? 'jumbotron-fluid' : ''}`} {...props}></div>;
}

export default Jumbotron;
