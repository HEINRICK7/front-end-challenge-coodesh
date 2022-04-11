import React from 'react';
import * as C from './GlobalStyled'
import RoutesAdd from './routes'

import GlobalState from './GlobalContext/GlobalState';

function App() {
  return (
    <>
    <GlobalState>
      <C.GlobalStyled />
      <RoutesAdd />
    </GlobalState>
    </>
    
  );
}

export default App;
