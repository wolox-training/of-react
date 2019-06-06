import React from 'react';
import styles from './styles.module.scss';

function CustomInput({ label, input, type, meta }) {
  const inputClassName = meta.touched ? meta.valid ? styles.valid : styles.invalid : '';
  return (
    <div className={styles.customInputContainer} >
      <label>{label}</label>
      <input {...input} type={type}  className={styles.customInput + ' ' + inputClassName}  />
      {(meta.error && meta.touched) && (<div className={styles.error}>{meta.error}</div>)}
    </div>
  );
}
  
export default CustomInput;
