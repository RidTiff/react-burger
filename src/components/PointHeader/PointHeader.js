import React from 'react';
import styles from './PointHeader.module.css';
import PropTypes from 'prop-types';

export default function PointHeader(props) {
    return (
        <div className={`${styles.point} p-5`}>
            {props.children}
            <p className={`ml-2 text text_type_main-default`}>
                {props.text}
            </p>
        </div>
    )
}

PointHeader.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};