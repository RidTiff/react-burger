import React from 'react';
import styles from './Main.module.css';
import PropTypes from 'prop-types';

export default function Main(props) {
  return <main className={styles.main}> {props.children} </main>;
}

Main.propTypes = {
  children: PropTypes.array,
};