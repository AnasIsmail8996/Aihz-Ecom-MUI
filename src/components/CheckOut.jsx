import * as React from 'react';
import DrawerAppBar from "../components/AppBar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function CheckOut ()  {
  return (
    <div>
  <DrawerAppBar />


  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    </div> 
  )
}
export default CheckOut;
