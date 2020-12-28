import React from 'react'
import HexadecimalTo from '../DisplayResult/HexadecimalResults'


function HexadecimalToFunctions({value}) {
    const HexToDecimal = (hexValue) =>{
        let result = parseInt(hexValue, 16)
        return isNaN(result) ? 0: result
    }

    const HexToBinary = (hexValue) =>{
        let result = ("00000000" + parseInt(hexValue, 16).toString(2)).substr(-8)
        return isNaN(result) ? 0: result
    }

    const HexToOctal = (hexValue) =>{

        let result = parseInt(hexValue, 16).toString(8)
        return isNaN(result) ? 0: result
    }

    let result1 = HexToDecimal(value)
    let result2 = HexToBinary(value)
    let result3 = HexToOctal(value) 
    
    // console.log(result1, result2, result3)
    
    return (
        <div>
            <HexadecimalTo result1={result1} result2={result2} result3={result3} />
        </div>
    )
}

export default HexadecimalToFunctions
