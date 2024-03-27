import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
 
 
function App() {
 
    const [produkty, nastavProdukty] = useState([]);
    const [cenaKosiku, nastavCenuKosiku] = useState(0);
    const [kosik, nastavKosik] = useState({});
 
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(odpoved => {
                nastavProdukty(odpoved.data)
            });
    }, []);
 
    function pridatProduktDoKosiku(produkt) {
        const novyKosik = { ...kosik };
        novyKosik[produkt.id] = novyKosik[produkt.id] ? novyKosik[produkt.id] + 1 : 1;
        nastavKosik(novyKosik);
        nastavCenuKosiku(prevCena => prevCena + produkt.price);
    }
 
    function odebratProduktZKosiku(produkt) {
        if (kosik[produkt.id] > 0) {
            const novyKosik = { ...kosik };
            novyKosik[produkt.id]--;
            nastavKosik(novyKosik);
            nastavCenuKosiku(prevCena => prevCena - produkt.price);
        }
    }
 
    return (
        <>
          <Alert severity="success">Vše funguje</Alert>
            <Paper>
                <Typography variant="subtitle1">
                    {cenaKosiku !== 0 && <span>Cena košíku je: {cenaKosiku} Kč</span>}
                </Typography>
            </Paper>
            <Grid container spacing={2}>
                {produkty.map(produkt => (
                    <Grid item xs={6} key={produkt.id} style={{ listStyle: "none" }}>
                        <Paper variant="elevation" elevation={4} square={false} style={{ textAlign: "center" }}>
                            <div className='product' key={produkt.id} style={{ listStyleType: "none" }}>
                                <img src={produkt.image} style={{ width: "100px" }} alt={produkt.title}></img>
                                <Typography variant="subtitle2">{produkt.title}</Typography>
                                <Typography variant="button">{produkt.price} Kč</Typography>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "blue", margin: 5, borderRadius: 20 }}
                                    onClick={() => pridatProduktDoKosiku(produkt)}
                                >
                                   Přidat Produkt
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "blue", margin: 5, borderRadius: 20 }}
                                    onClick={() => odebratProduktZKosiku(produkt)}
                                >
                                    Odebrat produkt
                                </Button>
                                <Typography variant="body2">
                                    Množství: {kosik[produkt.id] || 0}
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
 
export default App;