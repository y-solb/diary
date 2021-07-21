import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({ name: uploaded.original_filename, url: uploaded.url });
  };

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        name="file"
        accept="image/*"
        onChange={onChange}
      ></input>
      <button className={styles.imgBtn} onClick={onButtonClick}>
        {name || '사진을 올려주세요'}
      </button>
    </div>
  );
};

export default ImageFileInput;
