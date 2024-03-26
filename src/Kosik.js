import Typography from "@mui/material/Typography";
import Polozka from "./Polozka"

export default function Kosik(props) {
    const kosik = props.obsahKosiku;

    function cenaKosiku() {
        let soucet = 0;
        for (let produkt of kosik) {
            soucet += produkt.price
        }
        return soucet;
    }

    return (
        <>


            <Typography variant="h5" gutterBottom>Cena Košíku : {cenaKosiku()}</Typography>
            {
                kosik.map(produkt => (

                    <>

                        <Typography variant="h5" gutterBottom>{produkt.title}</Typography>
                        <button onClick={() => props.odebratPolozku(produkt)}>Odebrat</button>
                        <Polozka data={produkt} />



                    </>


                ))
            }


















        </>










    )
}