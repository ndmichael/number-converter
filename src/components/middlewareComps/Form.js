import React from 'react'
import { TextField, Select, Button, MenuItem, Typography, FormControl, Grid, Box } from '@material-ui/core'

function Form({ submitHandler, choiceHandler, valueHandler, choice }) {
    return (

        <form onSubmit={submitHandler}>
            <Grid container xs={12}  fullWidth="true" spacing={3} >
                <Grid item sm={12}>
                    <Typography variant="h4">
                        <b>Convert From... </b>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <FormControl fullWidth="true">
                        <Select labelId="label" id="select" value={choice} onChange={choiceHandler} >
                            <MenuItem value="decimal">
                                <Typography variant="h6" color="secondary">
                                Decimal
                                </Typography>
                            </MenuItem>
                            <MenuItem value="binary">
                                <Typography variant="h6" color="secondary">
                                    Binary
                                </Typography>
                            </MenuItem>
                            <MenuItem value="hexadecimal">
                                <Typography variant="h6" color="secondary">
                                    Hexadecimal
                                </Typography>
                            </MenuItem>
                            <MenuItem value="octal">
                                <Typography variant="h6" color="secondary">
                                    Octal
                                </Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={7}>
                    <FormControl fullWidth="true">
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

                <Box ml={1}>
                    <Button type="submit" variant="contained" color="secondary" size="large">
                        CONVERT
                    </Button>
                </Box>

            </Grid>
        </form>


    )
}

export default Form


