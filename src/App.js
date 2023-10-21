import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';
import Carlist from './components/Carlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position='static'>
            <Toolbar>
              <Typography variant = 'h6'>Carshop</Typography>
            </Toolbar>
        </AppBar>
        <Carlist />
      </header>
    </div>
  );
}

export default App;
