import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import TextareaAutosize from 'react-textarea-autosize';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const dateRef = useRef();
  const feelingRef = useRef();
  const titleRef = useRef();
  const contentsRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({ fileName: file.name, fileURL: file.url });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      date: dateRef.current.value,
      feeling: feelingRef.current.value,
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
      title: titleRef.current.value,
      contents: contentsRef.current.value,
    };
    onAdd(card);
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
      <FileInput name={file.fileName} onFileChange={onFileChange} />
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
