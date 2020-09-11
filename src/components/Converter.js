import React, {useState, useEffect} from 'react'
import DecimalToFunctions from './converterFunctions/DecimalToFunctions'
import BinaryToFunctions from './converterFunctions/BinaryToFunctions'
import OctalToFunctions from './converterFunctions/OctalToFunctions'
import HexadecimalToFunctions from './converterFunctions/HexadecimalToFunctions'


function Converter() {
    const [valueToConvert, setValueToConvert] = useState({choice: 'decimal', value: 0})

    const choiceHandler = (e) =>{
        setValueToConvert({...valueToConvert, choice: e.target.value})
    }
    const valueHandler = (e) =>{
        if (e.target.value >= 0)
            setValueToConvert({...valueToConvert, value: e.target.value})
        else{
            setValueToConvert({value: 0}) 
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        // console.log(valueToConvert.value)
    }


    const cond = valueToConvert.choice === 'decimal'?
                <DecimalToFunctions value= {valueToConvert.value} /> :
            valueToConvert.choice === 'binary'?
                <BinaryToFunctions value= {valueToConvert.value} /> :
            valueToConvert.choice === 'octal'?
                <OctalToFunctions value= {valueToConvert.value} /> :
                <HexadecimalToFunctions value= {valueToConvert.value} />

    
    
    return (
        
        <div>
            {cond}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="convertfrom">Convert From</label> <br />
                    <select onChange={choiceHandler}>
                        <option value="decimal">Whole Number</option>
                        <option value="binary">Binary</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                    <input type="text" onChange={valueHandler} name="choice" placeholder={`enter an ${valueToConvert.choice} value`} />
                </div>
            </form>
        </div>
    )
}

export default Converter
