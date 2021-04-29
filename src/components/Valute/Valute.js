import React, { useState } from 'react';
import { Paper, Select, MenuItem, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { valuteSelector } from '../../redux/selectors';

const Valute = () => {
  const [current, setCurrent] = useState('');
  const valute = useSelector(valuteSelector);
  if (!valute) return null;

  console.log('current', valute[current]);

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ marginBottom: '30px', padding: '20px' }}>
      <Typography color="textSecondary" gutterBottom>
        {current ? valute[current].Name : 'Выберите валюту'}
      </Typography>

      {current ? (
        <Typography color="textPrimary" gutterBottom>
          {`${valute[current].Nominal} ${current}  <----> ${valute[current].Value} RUB ${trend(
            valute[current].Value,
            valute[current].Previous
          )}`}
        </Typography>
      ) : (
        <Select value={current} onChange={handleChange} variant="standard" fullWidth>
          {Object.keys(valute).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      )}
    </Paper>
  );
};

export default Valute;

const trend = (current, previous) => {
  if (current > previous) return ' ▲';
  if (current < previous) return ' ▼';
  return '';
};
