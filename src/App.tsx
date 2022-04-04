import React from 'react';
import * as C from './GlobalStyled'
import RoutesAdd from './routes'
import './App.css';

function App() {
  return (
    <>
          <C.GlobalStyled />
          <C.Container>
              <RoutesAdd />
          </C.Container>
      </>
    
  );
}

export default App;
