import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';
import Carlist from './components/Carlist';
import logCar from './components/img/logCar.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position='static' id='row'>
            <Toolbar>
              <Typography variant='h4' className='logo'>
                MyGarage
                <img src={logCar} width={30} height={30}></img>
              </Typography>
            </Toolbar>
        </AppBar>
        <Carlist />
      </header>
    </div>
  );
}

export default App;
