import React from 'react'
import OctalTo from '../DisplayResult/OctalResults'


function OctalToFunctions({value}) {
    const OctalToDecimal = (octValue=0) =>{
        let result = parseInt(octValue, 8)
        return isNaN(result) ? 0: result
    }
    const OctalToBinary= (octValue=0) =>{
        let result = ("00000000" + parseInt(octValue, 8).toString(2)).substr(-8)
        return isNaN(result) ? 0: result
    }
    const OctalToHexadecimal = (octValue=0) =>{
        let result = parseInt(octValue, 8).toString(16).toUpperCase()
        return result
    }

    let result1 = OctalToDecimal(value)
    let result2 = OctalToBinary(value) 
    let result3 = OctalToHexadecimal(value)
    // console.log(result1, result2, result3)
    
    return (
        <div>
            <OctalTo result1={result1} result2={result2} result3={result3} />
        </div>
    )
}

export default OctalToFunctions
