require('file?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import MainExample from "./mainExample.js";

class Examples extends React.Component {
  render () {
    return (
      <MainExample />
    )
  }
}

ReactDOM.render(<Examples />, document.getElementById('app'));
