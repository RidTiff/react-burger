import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './AppHeader.module.css';
import PointHeader from '../PointHeader/PointHeader';

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
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