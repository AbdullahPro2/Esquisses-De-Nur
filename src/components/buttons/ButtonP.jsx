import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonP({ text, to, styles }) {
  const navigate = useNavigate();
  return (
    <button
      className={`mx-auto mt-10 flex bg-stone-600  px-4 py-2 text-white  hover:bg-stone-500 md:px-6 md:py-4 md:text-lg`}
      onClick={() => navigate(to)}
    >
      {text}
    </button>
  );
}

export default ButtonP;
