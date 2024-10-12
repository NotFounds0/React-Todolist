import React from "react";

const Input = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        className="w-full border p-2 rounded mt-2"
        placeholder="Başlık"
      />
    </div>
  );
};

export default Input;
