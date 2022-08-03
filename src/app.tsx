import React from "react";
import './styles.scss';
import image from './assets/logo_1.png';

export const App = (props: {
  title: string;
}) => {
  return (
    <>
      <div className="main-container">
        <img className="main-logo" src={image}></img>
        <h1 className="main-title">{props.title}</h1>
      </div>
    </>
  )
};
