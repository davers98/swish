import React from 'react';

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  style,
  ...rest
}) => {
  return (
    <div className="input-container">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          borderRadius: '4px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          width: '50% ' ,
          ...style,
        }}
        {...rest}
      />
    </div>
  );
};

export default Input;
