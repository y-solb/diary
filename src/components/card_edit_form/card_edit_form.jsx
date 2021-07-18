import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const dateRef = useRef();
  const feelingRef = useRef();
  const titleRef = useRef();
  const contentsRef = useRef();

  const { date, feeling, title, contents } = card;

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({ ...card, [event.currentTarget.name]: event.target.value });
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        ref={dateRef}
        name="date"
        onChange={onChange}
        value={date}
        className={styles.date}
        placeholder="날짜"
      ></input>
      <select ref={feelingRef} name="feeling" onChange={onChange} value={feeling} className={styles.feeling}>
        <option value="happy">행복</option>
        <option value="soso">그냥저냥</option>
        <option value="sad">슬픔</option>
        <option value="angry">화남</option>
      </select>
      <button className={styles.deleteBtn} onClick={deleteCard}>
        X
      </button>
      <ImageFileInput />
      <input
        type="text"
        ref={titleRef}
        name="title"
        onChange={onChange}
        value={title}
        className={styles.title}
        placeholder="제목"
      ></input>
      <TextareaAutosize
        ref={contentsRef}
        name="contents"
        onChange={onChange}
        value={contents}
        className={styles.contents}
        placeholder="내용"
      ></TextareaAutosize>
    </form>
  );
};

export default CardEditForm;
