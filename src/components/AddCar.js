import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";


function AddCar(props){
    const initialCar = {
        brand : "",
        model : "",
        color : "",
        year : "",
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
            <button onClick = {handleClickOpen} id="AddCar">New Car</button>
            <Dialog open = {open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <input 
                        placeholder="Brand"
                        name="brand"
                        value={car.brand}
                        onChange={handleChange}
                    />
                    <br/>

                    <input 
                        placeholder="Model"
                        name="model"
                        value={car.model}
                        onChange={handleChange}
                    />
                    <br/>

                    <input 
                        placeholder="Color"
                        name="color"
                        value={car.color}
                        onChange={handleChange}
                    />
                    <br/>

                    <input 
                        placeholder="Year"
                        name="year"
                        value={car.year}
                        onChange={handleChange}
                    />
                    <br/>

                    <input 
                        placeholder="Price"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                    />
                    <br/>
                </DialogContent>

                <DialogActions>
                    <button onClick={handleClose}>Close</button>
                    <button onClick={handleSave}>Save</button>
                    
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddCar;