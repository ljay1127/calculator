import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Calculator from './pages/Calculator';
import Help from './pages/Help'

import './css/App.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path='/' exact>
          <Calculator/>
        </Route>
        <Route path='/help' exact>
          <Help/>
        </Route>
      </Switch>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
