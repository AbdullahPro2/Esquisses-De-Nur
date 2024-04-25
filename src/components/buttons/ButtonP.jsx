import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonP({ text, to }) {
  const navigate = useNavigate();
  return (
    <button
      className="mx-auto mt-10 w-36 bg-stone-500 px-4 py-2 text-white  md:w-48 md:px-6 md:py-4 md:text-lg"
      onClick={() => navigate(to)}
    >
      {text}
    </button>
  );
}

export default ButtonP;
