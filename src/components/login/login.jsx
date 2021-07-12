import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <ul className={styles.list}>
          <li>
            <button className={styles.loginBtn} onClick={onLogin}>
              Google
            </button>
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
