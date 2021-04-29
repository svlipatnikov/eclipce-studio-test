import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setValuteAction } from './redux/actions';
import Valute from './components/Valute/Valute';
import Converter from './components/Converter/Converter';
import getData from './api';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then((data) => {
      console.log(data.Valute);
      if (!!data.Valute) dispatch(setValuteAction(data.Valute));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Valute />
        <Converter />
      </Container>
    </div>
  );
};

export default App;
