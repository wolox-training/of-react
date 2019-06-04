import React from 'react';

const getValidityClassName = meta => {
  if (meta.active) {
    return '';
  }
  if (meta.touched && meta.invalid) {
    return " invalid";
  }
  if (meta.touched && meta.valid) {
    return " valid";
  }
  return '';
};


export const customInput = props => {
    const { label, input, type, meta } = props;
    return (
    <div className="custom-input-container" >
      <label>{label}</label>
      <input {...input} type={type}  className={"custom-input" + getValidityClassName(meta)}  />
      {(meta.error && meta.touched) && (
        <div className='error'>{meta.error}</div>
      )}
    </div>
  );
};