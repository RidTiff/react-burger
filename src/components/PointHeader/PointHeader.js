import React from 'react';
import ReactDOM from 'react-dom/client';
import { isPropertySignature } from 'typescript';
import styles from './PointHeader.module.css';

export default function PointHeader(props) {
    return (
        <a href='#' className={`${styles.point} p-5 ${props.className}`}>
            {props.children}
            <p className={`ml-2 text text_type_main-default`}>
                {props.text}
            </p>
        </a>
    )
}