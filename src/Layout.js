import { Outlet, Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MaterialUILink from '@mui/material/Link'
import Button from '@mui/material/Button'
 
export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <Link style={{margin: 85}}href="#" underline="hover" to="/"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="outlined">Home</Button></MaterialUILink></Link>
                    <Link style={{margin: 30}} href="#" underline="hover" to="/pocitadlo"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="outlined">Počítadlo </Button></MaterialUILink></Link>
                    <Link style={{margin: 30}} href="#" underline="hover" to="/kavy"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="outlined">Seznam káv </Button></MaterialUILink></Link>
                    <Link style={{margin: 30}} href="#" underline="hover" to="/ukolnicek"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="outlined">Úkolníček (ještě není)</Button></MaterialUILink></Link>
                    <Link style={{margin: 30 }} href="#" underline="hover" to="/kalkulacka"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="outlined">Kalkulačka </Button></MaterialUILink></Link>
                </ul>
            </nav>
            <Outlet />
        </>
    )
     }