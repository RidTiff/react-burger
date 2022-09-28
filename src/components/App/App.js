import React, { useState, useEffect } from 'react';
import './App.module.css';

import Main from '../Main/Main';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import { api, getResponseData } from '../../utils/api.js';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  

  useEffect(() => {
    const getIngredients = () => {
      fetch(`${api.baseUrl}/ingredients`, {headers: api.headers,})
        .then(getResponseData)
        .then((res) => setIngredients(res.data))
        .catch((err) => {
          console.log(err);
        });
    };
    getIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      <Main>
        <BurgerIngredients ingredients = {ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
      </Main>
    </>
  );
}
