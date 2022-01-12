import React from 'react';

import Weeks from './components/showTrainings/Weeks';
import Modify from './components/modify/Modify';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Route, Routes, useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

const navigate = useNavigate();

const createPlan = () => {
  
}

  return (
    <> 
      <ThemeProvider theme={createTheme({palette: {mode: 'dark'}})}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate('/1')}> trainingplan</Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/:id" exact element={<Weeks />} />
            <Route path="/modify/:id" exact element={<Modify />} />
          </Routes>

      </ThemeProvider>
    </>
  
  );
}

export default App;
