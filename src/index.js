// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

//const jsx = <h1>Hello, Platzi badges!</h1>;
//const element = React.createElement("div",{},React.createElement("h1",{}, "hola platzi"),React.createElement("p",{}, "soy janpi"))

const container = document.getElementById('app');

//const sum = (
    //<div> <h1> hola, platzi badges</h1>
    //<p>Soy jeanpi y estoy aprendiendo React.js</p>
   // </div>
//)

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
