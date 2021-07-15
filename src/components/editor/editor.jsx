import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>작성란</h1>
    <div className={styles.cards}>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </div>
  </section>
);

export default Editor;
