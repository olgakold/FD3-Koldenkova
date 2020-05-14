"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

let nameStore='Мороженое на любой вкус';;
let icesArr=require('./products.json');


ReactDOM.render(
  <Ishop
    name={nameStore}
    products={icesArr}

  />
  , document.getElementById('container') 
);

