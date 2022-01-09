import React from 'react';

import Weeks from './components/showTrainings/Weeks';
import Modify from './components/edit/Modify';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [appBarIndex, setAppBarIndex] = React.useState(0);

  return (
    <>
      <ThemeProvider theme={createTheme({palette: {mode: 'dark'}})}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => setAppBarIndex(0)}> Treenit</Button>
              <Button color="inherit" onClick={() => setAppBarIndex(1)}> Luo treeniohjelma </Button>
            </Toolbar>
          </AppBar>


          {appBarIndex === 0 && <Weeks />}
          {appBarIndex === 1 && <Modify />}

      </ThemeProvider>
    </>
  
  );
}

export default App;
