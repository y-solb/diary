import React, { memo, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.imgBtn}>사진을 올려주세요</button>
    </div>
  );
};

export default ImageFileInput;
