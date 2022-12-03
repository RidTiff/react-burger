import { NavLink } from 'react-router-dom';
import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './AppHeader.module.css';
import PointHeader from '../PointHeader/PointHeader';

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to='/' exact={true} className={`${styles.constructor, styles.link} mr-2`}>
                    <PointHeader text='Конструктор'>
                        <BurgerIcon type='primary'/>
                    </PointHeader>
                </NavLink>
                <NavLink to='/feed' exact={true} className={styles.link}>
                    <PointHeader text='Лента заказов'>
                        <ListIcon type='primary'/>
                    </PointHeader>
                </NavLink>
            </nav>
            <NavLink to='/' exact={true}>
                <Logo/>
            </NavLink>
            <NavLink to='/profile' exact={true} className={styles.link}>
                <PointHeader text='Личный кабинет' className={styles.profile}>
                    <ProfileIcon type='primary'/>
                </PointHeader>
            </NavLink>
        </header>
    )
}