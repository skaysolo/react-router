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
                   <Button   underline="none" variant="h5" href="/react-router/#">Home</Button>
                   <Button underline="none" variant="h5" href="/react-router/#/pocitadlo">Počítadlo </Button>
                    <Button  underline="none" variant="h5" href="/react-router/#/kavy">Seznam kávy</Button>
                    <Button underline="none" variant="h5" href="/react-router/#/ukolnicek">Úkolníček</Button>
                    <Button  underline="none" variant="h5" href="/react-router/#/eshop">Eshop </Button>
              <Button  underline="none" variant="h5" href="/react-router/#/kalkulacka">Kalkulačka</Button>
                   <Button  underline="none" variant="h5" href="/react-router/#/oblibenabarva">Oblíbená barva</Button>
                </ul>
            </nav>
          
        </>
    )
     }