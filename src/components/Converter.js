import React, { useState } from "react";
import "../App.css";
import DecimalTo from "./DecimalTo";
import { TextField, Select, MenuItem, InputLabel } from "@material-ui/core";

function changeToDecimal(value, type) {
  // -> Number
  //Helper Function that change Binary , Octal, Decimal , Hexadecimal to Decimal

  switch (type) {
    case "Binary":
      return parseInt(value, 2).toString(10);
    case "Octal":
      return parseInt(value, 8).toString(10);
    case "Decimal":
      return value;
    case "Hexadecimal":
      return parseInt(value, 16).toString(10);
  }
}

export default function Converter(props) {
  // We convert the user input to Decimal  and then outputs the respective result ;
  const [inputValue, setInputValue] = useState(0);
  const [inputType, setInputType] = useState("Decimal");

  function handleInputTypeChange(e) {
    setInputType(e.target.value);
  }
  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="converter">
      <div className="converter__result">
        <DecimalTo value={changeToDecimal(inputValue, inputType)} />
      </div>
      <form className="converter__input">
        <TextField
          id="standard-basic"
          label="Enter the Number Here "
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <Select
          value={inputType}
          onChange={handleInputTypeChange}
          label="type"
          className="input-type"
        >
          <MenuItem value={"Decimal"}> Decimal</MenuItem>
          <MenuItem value={"Binary"}>Binary </MenuItem>
          <MenuItem value={"Hexadecimal"}> HexaDecimal</MenuItem>
        </Select>
      </form>
    </div>
  );
}
