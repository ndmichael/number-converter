import React, {useState} from 'react'
import Form from './middlewareComps/Form'


function Converter({formInput}) {
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
        formInput(valueToConvert.choice, valueToConvert.value)
        // console.log(valueToConvert.value)
    }
    
    
    return (
        
        <div>
            <Form submitHandler={submitHandler} 
                choiceHandler={choiceHandler} 
                valueHandler={valueHandler}
                choice = {valueToConvert.choice}>
            </Form>
        </div>
    )
}

export default Converter

