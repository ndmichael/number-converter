import React from 'react'
import DecimalTo from '../DisplayResult/DecimalResults'


function DecimalToFunctions({value}) {
    const DecToBinary = (decValue=0) =>{
        let value = parseInt(decValue)
        let result = (value).toString(2)
        return isNaN(result) ? 0: result
    }

    const DecToOctal = (decValue=0) =>{
        let value = parseInt(decValue)
        let result = (value).toString(8)
        return isNaN(result) ? 0: result
    }

    const DecToHexadecimal = (decValue=0) =>{
        // let value = parseInt(decValue) 
        let result = (+value).toString(16).toUpperCase()
        return result
    }
    
    let result1 = DecToBinary(value)
    let result2 = DecToOctal(value) 
    let result3 = DecToHexadecimal(value)
    // console.log(result1, result2, result3)
    
    return (
        <div>
            <DecimalTo result1={result1} result2={result2} result3={result3} />
        </div>
    )
}

export default DecimalToFunctions
