import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import sportcar from './img/sportcar.png';




function AddCar(props){
    const initialCar = {
       
        brand : "",
        model : "",
        color : "",
        year :  "",
        price : "",
    }

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState(initialCar)

    const handleClickOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }

    const handleSave = () => {
        props.addCar(car);
        setCar(initialCar)
        handleClose();
    }

    const handleChange = (event) => {
        setCar({...car, [event.target.name]:event.target.value})
    }



    return(
        <div>
            <Button onClick = {handleClickOpen} id="AddCar"> 
                
                <img src={sportcar} width="40" height="40"/>
            </Button>
            <Dialog open = {open} onClose={handleClose}>
                <DialogTitle>
                <img src={sportcar} width="25" height="25"/>

                </DialogTitle>
                <DialogContent>
                    <Stack spacing={1} mt={1}>
                    
                        <TextField
                            label="Brand"
                            name="brand"
                            autoFocus
                            value={car.brand}
                            onChange={handleChange}>
                        </TextField>
                        <TextField
                            label="Model"
                            name="model"
                            autoFocus
                            value={car.model}
                            onChange={handleChange}>
                        </TextField>
                        <TextField
                            label="Couleur"
                            type="color"
                            name="Color"
                            autoFocus
                            value={car.color}
                            onChange={handleChange}>
                        </TextField>

                        <TextField
                            label="Year"
                            type="number"
                            name="year"
                            autoFocus
                            value={car.year}
                            onChange={handleChange}>
                        </TextField>
                            <TextField
                            label="Price"
                            type="number"
                            name="price"
                            autoFocus
                            value={car.price}
                            onChange={handleChange}>
                        </TextField>
                       



                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleSave}>Save</Button>
                    
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddCar;