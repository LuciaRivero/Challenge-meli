import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Buscador from './Components/Buscardor'
import Detalle from './Components/Detalle'
import Resultado from './Components/Resultado';

function App() {

  const [resultado, setResultado] = useState({});
  const [terminoBusqueda, guardarTerminoBusqueda] = useState('');

  return (
    <Router>
      <Buscador 
        guardarTerminoBusqueda={guardarTerminoBusqueda}
        terminoBusqueda={terminoBusqueda}
        setResultado={setResultado}/>
      <Switch>
          <Route path="/item/:query"> 
            <Resultado resultado={resultado}/>
          </Route>
          <Route path="/items/:id" component={Detalle}/>
      </Switch>
  </Router>
  );
}

export default App;
