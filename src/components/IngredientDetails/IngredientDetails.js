import styles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function IngredientDetails() {

  const { id } = useParams();
  const ingredients = useSelector(store => store.ingredients.ingredients);
  const currentIngredient = ingredients.find(ingredient => ingredient._id === id);
  const { image_large, name, calories, proteins, fat, carbohydrates } = currentIngredient;

  return (
    <section className={` ${styles.section} pt-10 pb-15 pl-10 pr-10`}>
      <img className='pb-4 pt-10' src={image_large} />
      <p className={` ${styles.name} text text_type_main-medium pb-8`}>
        {name}
      </p>
      <ul className={`${styles.details} `}>
        <li className={`${styles.item} mr-5`}>
          <p className='text text_type_main-default text_color_inactive'>
            Каллории,ккал
          </p>
          <span className='text text_type_digits-default text_color_inactive'>
            {calories}
          </span>
        </li>
        <li className={`${styles.item}`}>
          <p className='text text_type_main-default text_color_inactive'>
            Белки,г
          </p>
          <span className='text text_type_digits-default text_color_inactive'>
            {proteins}
          </span>
        </li>
        <li className={`${styles.item}`}>
          <p className='text text_type_main-default text_color_inactive'>
            Жиры,г
          </p>
          <span className='text text_type_digits-default text_color_inactive'>
            {fat}
          </span>
        </li>
        <li className={`${styles.item}`}>
          <p className='text text_type_main-default text_color_inactive'>
            Углеводы,г
          </p>
          <span className='text text_type_digits-default text_color_inactive'>
            {carbohydrates}
          </span>
        </li>
      </ul>
    </section>
  );
}