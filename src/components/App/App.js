import React, { useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import { HomePage, 
  LoginPage, 
  RegisterPage, 
  ProfilePage, 
  ForgotPasswordPage, 
  ResetPasswordPage,
  IngredientPage, 
  NotFound, 
  ProfileOrdersPage,
  FeedPage,
  OrderPage } from '../../pages';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

import styles from './App.module.css';
import { getUser } from '../../services/actions/auth';
import { getCookie } from '../../utils/constants';
import { getIngredients } from '../../services/actions/ingredients';

import { AUTH_CHECKED } from '../../services/actions/auth';



export default function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredients());
    },
    [dispatch]
  ); 

  useEffect(() => {
    const accessToken = getCookie('token');
    if (accessToken) {
      dispatch(getUser());
    } else {
      dispatch({type: AUTH_CHECKED});
    }
  }, []);

  const closeModal = () => {
    history.goBack();
  };

  return(
    <div className={styles.app}>
      <AppHeader />
      <Switch location={ background || location }>

        <Route path='/' exact={true}>
          <HomePage />
        </Route>

        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>

        <Route path='/register' exact={true}>
          <RegisterPage />
        </Route>

        <ProtectedRoute path='/profile' exact={true}>
          <ProfilePage />
        </ProtectedRoute>

        <ProtectedRoute path='/profile/orders' exact={true}>
          <ProfileOrdersPage/>
        </ProtectedRoute>

        <ProtectedRoute path='/profile/orders/:id' exact={true}>
          <OrderPage />
        </ProtectedRoute>

        <Route path='/ingredients/:id'>
          <IngredientPage />
        </Route>

        <Route path='/forgot-password' exact={true}>
          <ForgotPasswordPage />
        </Route>

        <Route path='/reset-password' exact={true}>
          <ResetPasswordPage />
        </Route>

        <Route path='/feed' exact={true}>
          <FeedPage />
        </Route>

        <Route path='/feed/:id' exact={true}>
          <OrderPage />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>

      { background && (
        <Route path='/ingredients/:id'>
          <Modal closing={closeModal} showModal={true}>
            <IngredientDetails showModal={true}/>
          </Modal>
        </Route>
      )}

      { background && (
        <Route path='/feed/:id'>
          <Modal closing={closeModal} showModal={true}>
            <OrderPage />
          </Modal>
        </Route>
      )}

      { background && (
        <Route path='/profile/orders/:id'>
          <Modal closing={closeModal} showModal={true}>
            <OrderPage />
          </Modal>
        </Route>
      )}
    </div>
  );
}