import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { ChromePicker } from 'react-color';
import Box from '@mui/material/Box';

function OblibenaBarva() {
    const [vybranaBarva, setVybranaBarva] = useState("");

    const zmenCtverec = (barva) => {
        setVybranaBarva(barva.hex);
    };

    return (
        <>
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