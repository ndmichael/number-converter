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

    let cond = ''
    switch (state.choice) {
        case "hexadecimal":
            cond = <HexadecimalToFunctions value= {state.value} />
            break;
        case "binary":
            cond = <BinaryToFunctions value= {state.value} />
            break;
        case "octal":
            cond = <OctalToFunctions value= {state.value} />
            break;
        default:
            cond = <DecimalToFunctions value= {state.value} /> 
    }

    
    

    return (
        
        <div>
            {cond}
            <Converter formInput={formInput} />
        </div>
    )
}

export default GetValues
