import React, { useState, useEffect } from 'react';
import './App.module.css';

import Main from '../Main/Main';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import { api, getResponseData } from '../../utils/api.js';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [orderDetails, setOrderDetails] = useState(false);

  const [ingredientsDetails, setIngredientsDetails] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

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

  const handleIngredientClick = (item) => {
    setCurrentIngredient(item);
    setIngredientsDetails(true);
  };
  const closeIngredientPopup = () => {
    setIngredientsDetails(false);
  };

  const handleOrderClick = () => {
    setOrderDetails(true);
  };

  const closeOrderPopup = () => {
    setOrderDetails(false);
  };

  return (
    <>
      <AppHeader />
      <Main>
        <BurgerIngredients ingredients={ingredients} ingredientClick={handleIngredientClick}/>
        <BurgerConstructor ingredients={ingredients} onRequestOpen={handleOrderClick}/>
      </Main>

      {ingredientsDetails && (
        <Modal title='Детали ингредиента' onRequestClose={closeIngredientPopup} keyDown={closeIngredientPopup}>
          <IngredientDetails item={currentIngredient} />
        </Modal>
      )}

      {orderDetails && (
        <Modal onRequestClose={closeOrderPopup} keyDown={closeOrderPopup}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
