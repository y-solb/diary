import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logoutBtn} onClick={onLogout}>
        Logout
      </button>
    )}
    <img src="/imgs/heart.png" alt="hearts" className={styles.heartsImg} />
    <span className={styles.title}>그림 일기장</span>
  </header>
));

export default Header;
