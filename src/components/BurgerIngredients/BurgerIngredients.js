import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Tab, Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientPropType from '../../utils/prop-types.js';
import styles from './BurgerIngredients.module.css';

export default function BurgerIngredients({ ingredients, ingredientClick }) {
  const [current, setCurrent] = useState('buns');
  return (
    <>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 ml-5`}>
        Соберите бургер
      </h1>

      <section className={`${styles.section} pl-5`}>
        <div className={`${styles.tabs} mb-10`}>
          <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value='stuffing' active={current === 'stuffing'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>

        <div className={styles.ingredients}>
          <h2 className='text text_type_main-medium'>Булки</h2>

          <div className={`${styles.ingredient} mt-6`}>
            {ingredients
              .filter((item) => item.type === 'bun')
              .map((item) => (
                <div className={`${styles.card} mr-6 mb-6`} key={item._id} onClick={() => ingredientClick(item)}>
                  <Counter count={1} size='default'/>
                  <img className='image' src={item.image} alt='buns'/>
                  <div className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}>
                    20
                    <span className='ml-2'>
                      <CurrencyIcon type='primary'/>
                    </span>
                  </div>
                  <h3 className={`${styles.cardName} text text_type_main-default`}>
                    {item.name}
                  </h3>
                </div>
              ))}
          </div>

          <h2 className='text text_type_main-medium mt-10'>Соусы</h2>
          <div className={`${styles.ingredient} mt-6`}>
            {ingredients
              .filter((item) => item.type === 'sauce')
              .map((item) => (
                <div className={`${styles.card} mr-6 mb-6`} key={item._id} onClick={() => ingredientClick(item)}>
                  <Counter count={1} size='default'/>
                  <img className='image' src={item.image} alt='sauce'/>
                  <div className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}>
                    20
                    <span className='ml-2'>
                      <CurrencyIcon type='primary'/>
                    </span>
                  </div>
                  <h3 className={`${styles.cardName} text text_type_main-default`}>
                    {item.name}
                  </h3>
                </div>
              ))}
          </div>
          <h2 className='text text_type_main-medium mt-10'>Начинки</h2>
          <div className={`${styles.ingredient} mt-6`}>
            {ingredients
              .filter((item) => item.type === 'main')
              .map((item) => (
                <div className={`${styles.card} mr-6 mb-6`} key={item._id} onClick={() => ingredientClick(item)}>
                  <Counter count={1} size='default'/>
                  <img className='image' src={item.image} alt='main'/>
                  <div className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}>
                    20
                    <span className='ml-2'>
                      <CurrencyIcon type='primary'/>
                    </span>
                  </div>
                  <h3 className={`${styles.cardName} text text_type_main-default`}>
                    {item.name}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  ingredientClick: PropTypes.func.isRequired,
};