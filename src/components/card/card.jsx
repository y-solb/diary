import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { date, feeling, fileURL, title, contents } = card;

  return (
    <li className={styles.card}>
      <div className={styles.top}>
        <h1 className={styles.date}>{date}</h1>
        <img className={styles.feeling} src={`${getFeeling(feeling)}`} alt="feeling" />
      </div>
      {fileURL && <img className={styles.img} src={fileURL} alt="img" />}
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.contents}>{contents}</h4>
      </div>
    </li>
  );

  function getFeeling(feeling) {
    switch (feeling) {
      case 'happy':
        return '/imgs/happy.png';
      case 'sad':
        return '/imgs/sad.png';
      case 'angry':
        return '/imgs/angry.png';
      case 'soso':
        return '/imgs/soso.png';
    }
  }
};

export default Card;
