import React from 'react';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <button className={styles.logoutBtn}>Logout</button>
    <img src="/imgs/heart.png" alt="hearts" className={styles.heartsImg} />
    <span className={styles.title}>그림 일기장</span>
  </header>
);

export default Header;
