import React from "react";

const Input = ({ onChange, placeText, value, id, name, onBlur, className }) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type="text"
        className={`w-full border p-2 rounded mt-2 ${className}`}
        placeholder={placeText}
      />
    </div>
  );
};

export default Input;
