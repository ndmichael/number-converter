import React, {useState} from 'react'
import BinaryToFunctions from '../converterFunctions/BinaryToFunctions'
import DecimalToFunctions from '../converterFunctions/DecimalToFunctions'
import OctalToFunctions from '../converterFunctions/OctalToFunctions'
import HexadecimalToFunctions from '../converterFunctions/HexadecimalToFunctions'
import Converter from '../Converter'

const GetValues =() => {
    let initialValue = 0
    const [state, setState] = useState({choice: '', value: initialValue})

    const formInput = (choice, value) => {

        setState({
            ...state,
            choice: choice,
            value: value,
        })      
         
        
    }

    const cond = state.choice === 'decimal'?
    
    <HexadecimalToFunctions value= {state.value} />:
          state.choice === 'binary'?
    <BinaryToFunctions value= {state.value} /> :
          state.choice === 'octal'?
    <OctalToFunctions value= {state.value} /> :
    <DecimalToFunctions value= {state.value} /> 
    
    

    return (
        
        <div>
            {cond}
            <Converter formInput={formInput} />
        </div>
    )
}

export default GetValues
