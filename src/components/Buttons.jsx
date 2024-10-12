import React from "react";

const Buttons = ({ type, text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} px-8  py-2 text-white font-bold rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Buttons;
