import React from 'react'

const HexadecimalTo =({result1, result2, result3}) => {
    // console.log(props)
    return (
        <div>
          Hexadecimal says hello
          <p>Whole Number Result</p>
          <div>{result1}</div>
          <p>Binary Result</p>
          <div>{result2}</div>
          <p>Octal Result</p>
          <div>{result3}</div>
        </div>
    )
}

export default HexadecimalTo
