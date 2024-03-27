import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from "@mui/material/Alert";



export default function Omne() {
    return (
        <>
        <LinearProgress color="secondary" />
            <Typography variant='button' fontSize={30} margin={20} >HODNOCENÍ</Typography>
            <Rating size='large'  ></Rating>
            <Checkbox style={{margin: 30}}/>  <Typography variant='button' style={{margin: 10}}>Zaškrtni pokud jsi ohodnotil !</Typography>    
            <LinearProgress color="success" />      
            <Alert variant="filled" severity="info" style={{marginTop: 30}}>
  Díky za nakouknutí do mého portfólia ! &#11088; </Alert>
        </>
    )
};