import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import Header from '../header/header';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

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
            <button className={styles.loginBtn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
