import React from 'react'
import HexadecimalTo from '../HexadecimalTo'


function HexadecimalToFunctions({value}) {
    const HexToDecimal = (hexValue=0) =>{
        // let value = parseInt(decValue) 
        let result = parseInt(hexValue, 16)
        return result
    }

    const HexToBinary = (hexValue=0) =>{
        let result = ("00000000" + parseInt(hexValue, 16).toString(2)).substr(-8)
        return result
    }

    const HexToOctal = (hexValue=0) =>{

        let result = parseInt(hexValue, 16).toString(8)
        return result
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
