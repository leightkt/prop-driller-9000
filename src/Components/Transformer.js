import React from 'react';

function Transformer(props) {

  return (
    <img 
      className = 'transformer'
      src = {props.robot.url}
      alt = {props.robot.name}
      onClick={() => props.changeState()}
    />
  );
}

export default Transformer;
