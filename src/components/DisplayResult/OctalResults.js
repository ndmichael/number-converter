import React from 'react'

const OctalTo =({result1, result2, result3}) => {
    // console.log(props)
    return (
        <div>
          Octal says hello
          <p>Whole Number Result</p>
          <div>{result1}</div>
          <p>Binary Result</p>
          <div>{result2}</div>
          <p>Hexadecimal Result</p>
          <div>{result3}</div>
        </div>
    )
}

export default OctalTo
