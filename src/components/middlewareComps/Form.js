import React from 'react'

function Form({submitHandler, choiceHandler, valueHandler, value}) {
    return (
        <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="convertfrom">Convert From</label> <br />
                    <select onChange={choiceHandler}>
                        <option value="decimal">Whole Number</option>
                        <option value="binary">Binary</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                    <input type="text" onChange={valueHandler} name="choice" placeholder={`enter an ${value} value`} />
                </div>
                <button type="submit">Submit</button>
        </form>
    )
}

export default Form
