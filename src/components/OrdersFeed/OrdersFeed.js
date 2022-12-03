import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { CardOrder } from '../CardOrder/CardOrder';
import { Loader } from '../Loader/Loader';

import styles from './OrdersFeed.module.css';


export const OrdersFeed = () => {

  const location = useLocation();
  const { orders } = useSelector(store => store.ws);

  if (!orders) {
    return <Loader />;
  }

  return (
    <section>
      <ul className={`${styles.cardList} custom-scroll`}>
        {orders.map(item => (
          <Link key={item._id}
            className={styles.link}
            to={{
              pathname: `/feed/${item._id}`,
              state: { background: location },
            }}
          >
            <CardOrder card={item} />
          </Link>
        ))}
      </ul>
    </section>
  );
};