import React from 'react'
import { TextField, Select, Button,  MenuItem, InputLabel, FormControl, Grid } from '@material-ui/core'

function Form({ submitHandler, choiceHandler, valueHandler, choice }) {
    return (

        <form onSubmit={submitHandler}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12}>
                    <FormControl>
                        <InputLabel htmlFor="convertfrom" id="label">Convert From</InputLabel> <br />
                        <Select labelId="label" id="select" value={choice} onChange={choiceHandler}>
                            <MenuItem value="decimal">Whole Number</MenuItem>
                            <MenuItem value="binary">Binary</MenuItem>
                            <MenuItem value="hexadecimal">Hexadecimal</MenuItem>
                            <MenuItem value="octal">Octal</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <FormControl>
                        <TextField
                            id="outlined-secondary"
                            onChange={valueHandler}
                            name="choice"
                            label={`enter ${choice} value`}
                            variant="outlined"
                            color="primary"
                        />
                    </FormControl>
                </Grid>




                <Button type="submit" variant="contained" color="secondary">
                    CONVERT
        </Button>
            </Grid>
        </form>


    )
}

export default Form


