import { Button, Input } from "@material-ui/core"
import "./navBar.css"
import { Login, Home, ShoppingCart, Search } from '@mui/icons-material';

export default function NavBar() {

    return (<div className="header">

        <div className="bnavbar">
            <Button
                color="secondary"
                variant="contained"
                endIcon={<Home />}>
                Home
            </Button>
            <Button
                color="secondary"
                variant="contained"
                endIcon={<Login />}>
                Login
            </Button>
            <Button
                color="secondary"
                variant="contained"
                endIcon={<ShoppingCart />}
            >
                Carrito
            </Button>
        </div>

        <header className="logostitulo">
            <img className="imagen1" src="https://www.freeiconspng.com/uploads/exercise-sport-icon--7.png" width="50" alt="Exercise, sport icon " />
            <h1>Sport Store </h1>
            <img className="imagen2" src="https://www.freeiconspng.com/uploads/sport-activities-tennis-icon-512x512-pixel-9.png" width="50" alt="Sport Activities Tennis icon 512x512 pixel" />
        </header >

        <div className="inputsearch">
            <Input
                placeholder="¿Qué estás buscando?"
            ></Input><Button
                color="primary"
                variant="contained"
                startIcon={<Search />}
            >
                Buscar
            </Button>
        </div>




    </div >)
}