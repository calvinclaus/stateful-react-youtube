require('file?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import MainExample from "./mainExample.js";
import SimpleExample from "./simpleExample.js";

class Examples extends React.Component {
  render () {
    return (
      <div  style={{width:560, margin: "0 auto",}}>
        <h1>Sateful React YouTube</h1>
        <h2>Simple example:</h2>
        <SimpleExample />
        <h2>Most features:</h2>
        <MainExample />
      </div>
    )
  }
}

ReactDOM.render(<Examples />, document.getElementById('app'));
