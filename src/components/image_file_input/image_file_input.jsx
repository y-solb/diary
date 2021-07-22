import React, { memo, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const [loading, setLoading] = useState(false);

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
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
      {!loading && (
        <button className={`${styles.imgBtn} ${!name && styles.grey}`} onClick={onButtonClick}>
          {name || '사진을 올려주세요'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageFileInput;
