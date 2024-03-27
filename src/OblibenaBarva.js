import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { ChromePicker } from 'react-color';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";

function OblibenaBarva(props) {
   
  const vybranaBarva = props.vybranaBarva

    const zmenCtverec = (barva) => {
        props.setVybranaBarva(barva.hex);
    };

    return (
        <>
        <Alert severity="success">Vše funguje</Alert>
            <Typography variant="button" fontSize={30}>Vyberte si svou oblíbenou barvu</Typography>
            <ChromePicker
                barva={vybranaBarva}
                onChangeComplete={zmenCtverec}
                disableAlpha={true}
                style={{ marginTop: '20px' }}
            />
            {vybranaBarva && (
                <Box
                    width={200}
                    height={200}
                    bgcolor={vybranaBarva}
                    mt={2}
                />
            )}
        </>
    );
}

export default OblibenaBarva;