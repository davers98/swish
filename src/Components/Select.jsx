import React from 'react';

const Select = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  name,
  style,
  ...rest
}) => {
  return (
    <div className="select-container">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          borderRadius: '20px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          width: '50%',
          ...style,
        }}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
