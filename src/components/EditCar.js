import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import "./icone.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';



function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        
        brand: "",
        model: "",
        color: "",
        year: "",
        price: "",
    })

    const handleClickOpen = () => {
        setCar({
            
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            year: props.data.row.year,
            price: props.data.row.price,
        });

        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = () => {
        props.updateCar(car, props.data.id);
        handleClose();
    }

    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <EditIcon></EditIcon>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <IconButton onClick={handleClickOpen}>
                    <EditIcon ></EditIcon>
                </IconButton>
                <DialogContent>
                    <Stack spacing={1} mt={1}>
                       
                        <TextField

                            placeholder="Brand"
                            name="brand"
                            value={car.brand}
                            onChange={handleChange}
                        >
                        </TextField>
                        <TextField

                            placeholder="Model"
                            name="model"
                            value={car.model}
                            onChange={handleChange}
                        >
                        </TextField>
                        <TextField

                            placeholder="Color"
                            name="color"
                            value={car.color}
                            onChange={handleChange}
                        >
                        </TextField>
                        <TextField

                            placeholder="Year"
                            name="year"
                            value={car.year}
                            onChange={handleChange}
                        >
                        </TextField>



                        <TextField
                            placeholder="Price"
                            name="price"
                            value={car.price}
                            onChange={handleChange}
                        >

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

export default EditCar;