import React from 'react';
import closeBtn from '../../assets/Navbar/CrossIcon.png';
function SeeMore({ image, text, setShowModal, heading }) {
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
      onClick={() => setShowModal(false)}
    >
      <div className="relative mx-10 max-h-[90%] overflow-y-scroll rounded-lg bg-stone-100 p-4 no-scrollbar lg:w-[80%] ">
        <img
          src={closeBtn}
          alt="close modal window icon"
          className="absolute right-1 top-1 w-7 cursor-pointer rounded-full border-2 border-black"
          onClick={toggleModal}
        />
        {/* For mobiles */}
        <div className="mt-10 lg:hidden ">
          <h2 className=" text-center text-lg font-bold text-stone-700 ">
            {heading}
          </h2>
          <img
            src={image}
            className=" mx-auto  mt-4 h-auto w-auto rounded-lg lg:order-1 lg:mx-0 "
            alt="Portfolio Item "
          />
          <p className=" mt-4 text-center text-stone-700 ">{text}</p>
        </div>
        {/* For larger screen (lg) */}
        <div className=" mt-10 hidden lg:flex lg:justify-center">
          <img
            src={image}
            className=" mx-auto  mt-4 h-auto w-auto max-w-[50%] rounded-lg lg:mx-0 "
            alt="Portfolio Item "
          />
          <div className="flex max-w-[50%]  flex-col items-center p-10">
            <h2 className=" mt-8 text-center text-2xl font-bold text-stone-700  ">
              {heading}
            </h2>

            <p className="mt-8  text-justify text-lg text-stone-700 ">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
