import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientPropType from '../../utils/prop-types.js';
import styles from './BurgerConstructor.module.css';

export default function BurgerConstructor({ ingredients, onRequestOpen }) {
  return (
    <section className={` ${styles.constructor} pr-5 `}>
      <div className={`${styles.topBun}`}>
        {ingredients
          .filter((data) => data.name === 'Краторная булка N-200i')
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
        {ingredients
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
        {ingredients
          .filter((data) => data.name === 'Краторная булка N-200i')
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
        <Button type='primary' size='medium' onClick={() => onRequestOpen()}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  onRequestOpen: PropTypes.func.isRequired,
};