import React from 'react';
import styles from './card_edit_form.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { date, feeling, title, contents } = card;

  return (
    <form className={styles.form}>
      <input type="text" name="date" value={date} className={styles.date} placeholder="날짜"></input>
      <select name="feeling" value={feeling} className={styles.feeling}>
        <option value="happy">행복</option>
        <option value="soso">그냥저냥</option>
        <option value="sad">슬픔</option>
        <option value="angry">화남</option>
      </select>
      <button className={styles.deleteBtn}>X</button>
      <ImageFileInput />
      <input type="text" name="title" value={title} className={styles.title} placeholder="제목"></input>
      <TextareaAutosize
        name="contents"
        value={contents}
        className={styles.contents}
        placeholder="내용"
      ></TextareaAutosize>
    </form>
  );
};

export default CardEditForm;
