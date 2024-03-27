import Typography from '@mui/material/Typography';
import OblibenaBarva from "./OblibenaBarva";
import Alert from "@mui/material/Alert";


export default function Home() {
    return (
        <>
        <Alert severity="success">Vše funguje</Alert>
            <Typography variant='button' fontSize={30} margin={85} color={{ OblibenaBarva }}>Vítejte v mém react projektu !</Typography>
          
        </>
    )
};