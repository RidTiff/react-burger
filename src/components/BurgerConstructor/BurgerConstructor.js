import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

import ingredientPropType from '../../utils/prop-types.js';
import styles from './BurgerConstructor.module.css';

export default function BurgerConstructor(ingredients) {
  const [orderDetails, setOrderDetails] = useState(false);
  const data = ingredients.ingredients
  const handleOrderClick = () => {
    setOrderDetails(true);
  };

  const closePopup = () => {
    setOrderDetails(false);
  };

  const bun = useMemo(() => ingredients.find((ingredient) => ingredient.type === "bun"), [ingredients]);

  return (
    <>
      <section className={` ${styles.constructor} pr-5 `}>
        <div className={`${styles.topBun}`}>
          {bun
            .map((data) => (
              <ConstructorElement
                type='top'
                isLocked={true}
                text={`${data.name} (верх)`}
                price={data.price}
                thumbnail={data.image}
                key={data._id}
              />
            ))}
        </div>
        <ul className={`${styles.ingredients} mb-5`}>
          {data
            .filter((data) => data.type !== 'bun')
            .map((data) => (
              <li className={`${styles.ingredient} `} key={data._id}>
                <DragIcon type='primary' />
                <ConstructorElement
                  text={data.name}
                  price={data.price}
                  thumbnail={data.image}
                />
              </li>
            ))}
        </ul>
        <div className={`${styles.bottonBun}`}>
          {bun
            .map((data) => (
              <ConstructorElement
                type='bottom'
                isLocked={true}
                text={`${data.name} (низ)`}
                price={data.price}
                thumbnail={data.image}
                key={data._id}
              />
            ))}
        </div>

        <div className={`${styles.order}  mr-5`}>
          <div className={`${styles.price} mr-10`}>
            <p className={`${styles.priceNumber}text text_type_digits-medium mr-2`}>
              610
            </p>
            <CurrencyIcon type='primary' />
          </div>
          <Button type='primary' size='medium' onClick={() => handleOrderClick()}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {orderDetails && (
        <Modal onRequestClose={closePopup} keyDown={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};