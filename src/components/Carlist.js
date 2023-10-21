import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Snackbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { SERVER_URL } from "../constants";
import AddCar from './AddCar';
import EditCar from './EditCar';


function Carlist() {
    const columns = [
        { field: 'brand', headerName: 'Marque', width: 200 },
        { field: 'model', headerName: 'Modèle', width: 200 },
        { field: 'color', headerName: 'Couleur', width: 200 },
        { field: 'year', headerName: 'Année', width: 150 },
        { field: 'price', headerName: 'Prix', width: 150 },

        {
            field :"_links.car.href",
            headerName:"",
            sortable : false,
            filterable : false,
            renderCell : row => <EditCar data={row} updateCar={updateCar} />,
            

        },


        {
            field : "_links.self.href",
            headerName : "",
            sortable : false,
            filterable : false,
            renderCell: row => (
               // <button onClick={() => onDelClick(row.id)}> Delete</button>
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => onDelClick(row.id)}
                    style={{ cursor: 'pointer' }}
                    size='2x'
                    color='red'
                />
            )
        }

        ];
        
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        fetchCars()
    },[])
    /* methdes neccessaires */
    const fetchCars = () =>{
        fetch(SERVER_URL+"api/cars")
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(err => console.error(err))
    }

    const addCar = (car) =>{
        fetch(SERVER_URL + 'api/cars', {
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(car)
    })
        .then(response =>{
            if(response.ok){
                fetchCars();
            }
            else{
                alert('Something went wrong !')
            }
        })
        .catch(err => console.error(err))
    }

    const updateCar = (car, link) =>{
        fetch(link, {
        method : "PUT",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(car)
    })
        .then(response =>{
            if(response.ok){
                fetchCars();
            }
            else{
                alert('Something went wrong !')
            }
        })
        .catch(err => console.error(err))
    }
    

    const onDelClick = (url) => {
        if( window.confirm('Are you sure to delete ?')){
            fetch(url, {method : "DELETE"})
            .then(response => {
                if(response.ok){
                    fetchCars();
                    setOpen(true);
                }
                else{
                    alert('Something is wrong !!!')
                }
            })
            .catch(err => console.error(err))
        }
    }

    /* --------------------------------------------------------------*/

    return (
        <React.Fragment>
            <AddCar addCar={addCar}/>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                rows={cars}
                columns={columns}
                disableRowSelectionOnClick = {true}
                getRowId={row => row._links.self.href}
                />
                <Snackbar
                    open = {open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                    message = 'car deleted'
                />
            </div>
        </React.Fragment>
    );
    

    /*return (
        <div>
            <table>
                <tbody>
                    {cars.map((car, index)=> (
                        <tr key={index}>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );*/  
    
}
export default Carlist;