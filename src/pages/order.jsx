import { OrderInfo } from '../components/OrderInfo/OrderInfo';
import styles from './style.module.css';

export const OrderPage = () => {

  return (
    <main className={`${styles.order} mt-30`}>
      <OrderInfo />
    </main>
  );
};