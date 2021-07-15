import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const dateRef = useRef();
  const feelingRef = useRef();
  const titleRef = useRef();
  const contentsRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      date: dateRef.current.value,
      feeling: feelingRef.current.value,
      title: titleRef.current.value,
      contents: contentsRef.current.value,
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input type="date" ref={dateRef} name="date" className={styles.date}></input>
      <select ref={feelingRef} name="feeling" className={styles.feeling}>
        <option value="none">기분</option>
        <option value="happy">행복</option>
        <option value="soso">그냥저냥</option>
        <option value="sad">슬픔</option>
        <option value="angry">화남</option>
      </select>
      <button className={styles.addBtn} onClick={onSubmit}>
        +
      </button>
      <ImageFileInput />
      <input type="text" ref={titleRef} name="title" className={styles.title} placeholder="제목"></input>
      <TextareaAutosize
        ref={contentsRef}
        name="contents"
        className={styles.contents}
        placeholder="내용"
      ></TextareaAutosize>
    </form>
  );
};

export default CardAddForm;
