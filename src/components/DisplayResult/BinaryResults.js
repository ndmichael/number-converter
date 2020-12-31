import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

const BinaryTo = ({ result1, result2, result3 }) => {
  return (
    <Grid container xs={12} md={12}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" >
          Result In Decimal
        </Typography>
        <Box color="text.secondary" borderColor="grey.500" border={1} marginBottom="20px" padding="10px">
          <Typography >
            {result1}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6">
          Result in Octal
        </Typography>
        <Box color="text.secondary" borderColor="grey.500" border={1} marginBottom="20px" padding="10px">
          <Typography >
            {result2}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6" >
          Result in Hexadecimal
        </Typography>
        <Box color="text.secondary" borderColor="grey.500" border={1} marginBottom="20px" padding="10px">
          <Typography >
            {result3}
          </Typography>
        </Box>
      </Grid>
    </Grid>

  )
}

export default BinaryTo
