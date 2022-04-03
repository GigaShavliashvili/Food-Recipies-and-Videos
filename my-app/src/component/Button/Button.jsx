import React from 'react';
import "./button.scss"
import FastfoodIcon from '@mui/icons-material/Fastfood';
const Button = props => {
  return <button role="button" className={`button-57 btn ${props.className}`} 
  onClick={props.onClick ? () => props.onClick() : null}>
    <span className="text">{props.children}</span>
    <span>
<FastfoodIcon/>
    </span>
  </button>;

};

export default Button;
