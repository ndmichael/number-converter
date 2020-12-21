import React from 'react'
import BinaryTo from '../DisplayResult/BinaryResults'


const BinaryToFunctions =({value}) => {
    console.log(value)

    const BinToDecimal = (binValue=0) =>{
        let result = parseInt(binValue, 2)
        return result
    }
    const BinToOctal = (binValue=0) =>{
        let result = parseInt(binValue, 2).toString(8)
        return result
    }
    const DecToHexadecimal = (binValue=0) =>{
        let result = parseInt(binValue, 2).toString(16)
        return result
    }
    let result1 = BinToDecimal(value)
    let result2 = BinToOctal(value)
    let result3 = DecToHexadecimal(value)
    
    
    return (
        <div>
            <BinaryTo result1={result1} result2={result2} result3={result3} />
        </div>
    )
}

export default BinaryToFunctions
