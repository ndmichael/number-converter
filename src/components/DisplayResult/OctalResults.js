import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'


const OctalTo =({result1, result2, result3}) => {
    // console.log(props)
    return (
      <Grid container xs={12} md={12}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" >
          Result In   Decimal
        </Typography>
        <Box color="text.secondary" style={{background: "whitesmoke"}} marginBottom="15px" padding="10px">
          <Typography >
            {result1}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6">
          Result in Binary
        </Typography>
        <Box color="text.secondary" style={{background: "whitesmoke"}} marginBottom="15px" padding="10px">
          <Typography >
            {result2}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6" >
          Result in Hexadecimal
        </Typography>
        <Box color="text.secondary" style={{background: "whitesmoke"}} marginBottom="15px" padding="10px">
          <Typography >
            {result3}
          </Typography>
        </Box>
      </Grid>
    </Grid>
    )
}

export default OctalTo
