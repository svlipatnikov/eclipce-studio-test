import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Valute from './components/Valute/Valute';
import Converter from './components/Converter/Converter';
import getData from './api';
import Context from './context';
import './App.css';

const App = () => {
  let valuteData = null;

  useEffect(() => {
    getData().then((data) => {
      valuteData = data;
    });
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ valuteData }}>
        <Container maxWidth="sm">
          <Valute />
          <Converter />
        </Container>
      </Context.Provider>
    </div>
  );
};

export default App;
