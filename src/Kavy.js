import { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from "@mui/material/Alert";



function App() {
    


    const [kavy, nastavKavy] = useState([])
    const [vybranaKava, nastavVybranouKavu] = useState("")


    useEffect(() => {
        axios.get('https://api.sampleapis.com/coffee/hot')
            .then(odpoved => {
                nastavKavy(odpoved.data)
            }

            )

    }, [])

    return (
        <>  
        <Alert severity="success">Vše funguje</Alert>
        <Typography variant="button" fontSize={40}>COFFEE SHOP</Typography> <br></br>
           {vybranaKava != "" && <Typography variant="button" fontSize={20}>Vybraná káva je: {vybranaKava}</Typography>} <br></br>
            <Grid container spacing={1}>
                {kavy.map(kava => (
                    <>




                        <Grid item xs={2} key={kava.id} style={{ listStyle: "none" }}>
                            <Paper elevation={4} onClick={() => nastavVybranouKavu(kava.title)} style={{textAlign: "center"}}>
                                <img src={kava.image} style={{ width: "100px" }} ></img> <br></br>
                                <Typography variant="overline">{kava.title}</Typography>
                                </Paper>
                        </Grid>


                    </>
                ))}
            </Grid>
        </>
    );
}

export default App;