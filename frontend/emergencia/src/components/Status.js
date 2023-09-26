import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const emocionStyle = {
  height: 40,
  width: 150,
  bgcolor: '#E6E6E6',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 1,
  gap: 1.5,
};

const colorStyle = (color) => ({
  width: 15,
  height: 15,
  bgcolor: color,
  borderRadius: '50%',
});

function StatusSwitch({ status }) {
  switch (status) {
    case 1:
      return (
        <>
          <Box sx={colorStyle('#ffff00')}></Box>
          <Typography style={{fontSize: 20}}>Recibido</Typography>
        </>
      );
    case 2:
      return (
        <>
          <Box sx={colorStyle('#ffa500')}></Box>
          <Typography style={{fontSize: 20}}>En Proceso</Typography>
        </>
      );
    case 3:
      return (
        <>
          <Box sx={colorStyle('#008000')}></Box>
          <Typography style={{fontSize: 20}}>Terminado</Typography>
        </>
      );
    case 4:
      return (
        <>
          <Box sx={colorStyle('#808080')}></Box>
          <Typography style={{fontSize: 20}}>Archivado</Typography>
        </>
      );
    default:
      return null;
  }
}

function Status(props) {
  const accion = props.accion;
  const [counter, setCounter] = useState(1);
  console.log(accion);

  const counterIncrease = () => {
    if (counter < 4) {
      setCounter(counter + 1); // Update the state to trigger a re-render
    } else {
      setCounter(1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1,
      }}
      
    >
      <Box sx={emocionStyle} onClick={counterIncrease} style={{cursor:'pointer'}}>
        <StatusSwitch status={counter} />
      </Box>
      <Typography style={{fontSize: 15}}>Accion: {accion}</Typography>
    </Box>
  );
}

export default Status;
