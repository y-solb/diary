import React from 'react';
import styles from './card_edit_form.module.css';
import TextareaAutosize from 'react-textarea-autosize';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { date, feeling, fileName, title, contents } = card;

  const onFileChange = (file) => {
    updateCard({ ...card, fileName: file.name, fileURL: file.url });
  };

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
        name="date"
        onChange={onChange}
        value={date}
        className={styles.date}
        placeholder="날짜"
      ></input>
      <select name="feeling" onChange={onChange} value={feeling} className={styles.feeling}>
        <option value="happy">행복</option>
        <option value="soso">그냥저냥</option>
        <option value="sad">슬픔</option>
        <option value="angry">화남</option>
      </select>
      <button className={styles.deleteBtn} onClick={deleteCard}>
        X
      </button>
      <FileInput name={fileName} onFileChange={onFileChange} />
      <input
        type="text"
        name="title"
        onChange={onChange}
        value={title}
        className={styles.title}
        placeholder="제목"
      ></input>
      <TextareaAutosize
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
