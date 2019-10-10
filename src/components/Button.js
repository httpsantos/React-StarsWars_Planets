import React from "react";
import '../styles/Planet.css';

export default function Button(props) {
  return (
    <>
      <button className="button" onClick={props.onClick} 
        style={props.hidden ? {display: 'none'} : {display: 'block'}}
        >
        Next
        </button>
    </>
  );
}
