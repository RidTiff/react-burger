import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation} from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { placeOrderDate } from '../../utils/constants';
import styles from './CardOrder.module.css';


export const CardOrder = ({ card }) => {

  const { name, number, createdAt, ingredients: ingredientsId} = card;

  const { ingredients } = useSelector(store => store.ingredients);
  const { pathname } = useLocation();

  const orderedIngredients = ingredientsId.filter(ingredient => ingredient != null).map(item => {
    return ingredients?ingredients.find(el => el._id === item):'';
   }
  );  

  const sumTotal = useMemo(() => {
    return (
      orderedIngredients.reduce((acc, item) => acc + item.price, 0)
    );
  }, [orderedIngredients]);

  let status;
  let color;
  switch (card.status) {
    case 'done':
      status = 'Выполнен';
      color = '#00CCCC';
      break;
    case 'pending':
      status = 'Готовится';
      break;
    case 'created':
      status = 'Создан';
      break;
      default:
  }


  return (
    <article className={`${styles.card} mr-2`}>
      <div className={styles.info}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">{placeOrderDate(createdAt)}</p>
      </div>
      <div>       
        <p className="text text_type_main-medium mt-6 mb-2">{name}</p>
        {(pathname === '/profile/orders') && 
        (<p className='text text_type_main-default' style={{color}}>{status}</p>)}
      </div> 
      <div className={`${styles.total} mt-6`}>
        <ul className={styles.icons}>
          { 
            (ingredientsId.length > 5) &&
              ( <div className={styles.icon} style={{backgroundImage: `url(${orderedIngredients[5].image_mobile})` }}>
                  <p className={`${styles.lastIcon} text text_type_main-default`}>+{orderedIngredients.length - 5}</p>
                </div>)
          }
          {
            orderedIngredients.slice(0, 5).reverse().map((item, index) => {
              return (
                <li key={index} className={styles.img}>
                  <img src={item.image_mobile} className={styles.icon} alt='иконка ингредиента'/>
                </li>
              )
            })
          }
        </ul>

        <div className={`${styles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">{sumTotal}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}