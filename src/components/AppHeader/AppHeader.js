import { ProfileIcon, BurgerIcon, ListIcon, Logo, Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { isPropertySignature } from 'typescript';
import styles from './AppHeader.module.css';
import obnull from '../obnull.module.css'
import PointHeader from '../PointHeader/PointHeader';

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={`${styles.navUl} ${obnull.obnull}`}>
                    <li className={`${styles.constructor} mr-2`}>
                        <PointHeader text='Конструктор'>
                            <BurgerIcon type='primary'/>
                        </PointHeader>
                    </li>
                    <li>
                        <PointHeader text='Лента заказов'>
                            <ListIcon type='primary'/>
                        </PointHeader>
                    </li>
                </ul>
            </nav>
            <Logo/>
            <PointHeader text='Личный кабинет' className={styles.profile}>
                <ProfileIcon type='primary'/>
            </PointHeader>
        </header>
    )
}