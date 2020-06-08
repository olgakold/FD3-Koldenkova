"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';



test('работа кнопки "Редактировать" MobileClient', ()=>{
  let client = {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220, status: "active"};

  const component = renderer.create(
      <MobileClient info={client}/>
  ); 
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  const buttonElem = component.root.find( el => el.props.value=='Редактировать');   
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});

test('работа кнопки "Удалить" MobileClient', ()=>{
  let client = {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220, status: "active"};

  const component = renderer.create(
      <MobileClient info={client}/>
  ); 
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  const buttonElem = component.root.find( el => el.props.value=='Удалить');   
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
