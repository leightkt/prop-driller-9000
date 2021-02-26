import React from 'react';
// import { render } from 'react-dom';


function Header(props) {

  const showTransformers = () => {
    console.log("clicked")
    props.updateState()
  }

  return (
    <header
    onClick={() => showTransformers()}
    >
      <img
        src = {props.logo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
