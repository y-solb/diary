import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';

const Login = () => {
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <ul className={styles.list}>
          <li>
            <button className={styles.loginBtn}>Google</button>
          </li>
          <li>
            <button className={styles.loginBtn}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
