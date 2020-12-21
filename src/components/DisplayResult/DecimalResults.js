import React from 'react'

const DecimalTo =({result1, result2, result3}) => {
    // console.log(props)
    return (
        <div>
          Jackson says hello
          <p>Binary Result</p>
          <div>{result1}</div>
          <p>Octal Result</p>
          <div>{result2}</div>
          <p>Hexadecimal Result</p>
          <div>{result3}</div>
        </div>
    )
}

export default DecimalTo
