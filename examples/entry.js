require('file?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import MainExample from "./mainExample.js";
import SimpleExample from "./simpleExample.js";

class Examples extends React.Component {
  render () {
    return (
      <div  style={{maxWidth:560, margin: "0 auto", fontFamily: "sans-serif",}}>
        <h1><a href="https://github.com/calvinclaus/stateful-react-youtube">Sateful React YouTube</a></h1>

        <h2>1) Simply display video: &nbsp;
          <span style={{fontSize:17}}><a href="https://github.com/calvinclaus/stateful-react-youtube/blob/master/examples/simpleExample.js">(Source)</a></span>
        </h2>
        <SimpleExample />
        
      </div>
    )
  }
}

ReactDOM.render(<Examples />, document.getElementById('app'));
