import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// import Info from './view/informatain';
// import Card from './view/Card';
//import App from './view/App';

//import Mapxm from "./view/Map";

import STATE_C from "./view/STATE";
import STATE_F from "./view/useState_Function";
import Form from "./view/Form";

import Index from "./view/ConditionalRendering";
import IndexEvent from "./view/EVENT_HANDELER_CLASS/Index";

const date = new Date();
const today = date.getDate();
const toyear = date.getFullYear();
const toHour = date.getHours();
const toTime = date.getMinutes();

const styleLine= { 
  backgroundColor : "purple",
  textAlign: "center",
  color : "white",
  padding : "15px"
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <h1>Hello Tanvir</h1>
      <h2>{today}</h2>
      <h2 style={styleLine}>{today + ":" + toyear}</h2>
      <h2 className="heading">{toHour + ":" + toTime}</h2>
      {/*<Info/>
      <Card name="Tanvir Ahmmed" id="18-37847-2"/>*/}
      {/*<App/>*/}
      {/*<Mapxm/>*/}
     <h1>Using Class</h1>
     <STATE_C/>
     <h1>Using Function</h1>
     <STATE_F/>
     <h1>Form Validation</h1>
     <Form/>
     <Index/>
     <IndexEvent/>
      
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
