require('file?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import MainExample from "./mainExample.js";
import SimpleExample from "./simpleExample.js";

class Examples extends React.Component {
  render () {
    return (
      <div  style={{maxWidth:560, margin: "0 auto", fontFamily: "sans-serif",}}>
        <h1>Sateful React YouTube Examples</h1>
        <h2>1) Most features: &nbsp;
          <span style={{fontSize:17}}><a href="https://github.com/calvinclaus/stateful-react-youtube/blob/master/examples/mainExample.js">(Source)</a></span>
        </h2>
        <MainExample />
        <div style={{marginTop:30, marginBottom: 30}}></div>
        <h2>2) Simple Example: &nbsp;
          <span style={{fontSize:17}}><a href="https://github.com/calvinclaus/stateful-react-youtube/blob/master/examples/simpleExample.js">(Source)</a></span>
        </h2>
        <SimpleExample />
      </div>
    )
  }
}

ReactDOM.render(<Examples />, document.getElementById('app'));
