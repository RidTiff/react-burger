import { Oval } from 'react-loader-spinner';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <>
      <ModalOverlay />
      <div className={styles.container}>
        <Oval 
          ariaLabel="loading-indicator"
          height={180}
          width={180}
          strokeWidth={3}
          color="#3333FF"
          secondaryColor="#FF00CC"/>
      </div>
    </>
  );
};