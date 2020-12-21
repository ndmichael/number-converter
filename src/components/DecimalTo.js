import React from "react";
import "./Converter.css";

function DecimalTo(props) {
  let value = props.value;
  if (isNaN(parseInt(props.value))) {
    value = 0;
  }
  console.log(value);

  return (
    <div className="binary">
      <div className="result-value">
        <h3> Binary Result : </h3> <h3> {parseInt(value).toString(2)}</h3>
      </div>
      <div className="result-value">
        <h3> Octal Result : </h3> <h3> {parseInt(value).toString(8)}</h3>
      </div>
      <div className="result-value">
        <h3> Decimal Result : </h3> <h3> {parseInt(value).toString(10)}</h3>
      </div>
      <div className="result-value">
        <h3> HexaDecimal Result : </h3> <h3> {parseInt(value).toString(16)}</h3>
      </div>
    </div>
  );
}

export default DecimalTo;
