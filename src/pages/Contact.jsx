import React from 'react';

function Contact() {
  return (
    <>
      <section className="contact mb-40 ">
        <h1 className="mb-5 mt-10 text-center text-2xl font-bold lg:text-3xl">
          contact me
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-stone-800 "></div>
        <div className="mt-10 grid grid-cols-1 gap-8 px-9 md:grid-cols-2">
          <div className="about-us">
            <h6 className="h6 mb-3 text-lg font-semibold md:text-xl">
              We would love to hear from you.
            </h6>
            <p className="para mb-7 leading-loose">
              Whether you are planning a project, interested in getting involved
              with our mission, or inquiring about a job opportunity, please
              don’t hesitate to reach out.
            </p>
            <h6 className="h6 mb-0.5 text-lg font-semibold md:text-xl">
              Connect:
            </h6>
            <a href="#">
              <p className="mb-3 block text-pink-500">Instragram</p>
            </a>
            <a href="#">
              <p className="mb-3 block text-pink-500">Facebook</p>
            </a>
            <p className="mb-3 block text-pink-500">07 XX XX XX XX</p>
            <p className="mb-7 block text-pink-500">infor@nurfatima.fr</p>
            <h6 className="h6 mb-0.5 text-lg font-semibold md:text-xl">
              Address:
            </h6>
            <p className="para text-1.76xl mb-0 leading-loose">
              5700-A General Washington Drive
              <br />
              Alexandria, Virginia 22312
            </p>
          </div>
          <div className="contact-us-form">
            <form action="#">
              <label htmlFor="name" className="para mb-6 md:text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="para w-full border border-solid border-stone-400 px-4 py-2"
              />
              <label htmlFor="email" className="para mb-6 md:text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="para w-full border border-solid border-stone-400 px-4 py-2"
              />
              <label htmlFor="message" className="para mb-6 md:text-lg">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="8"
                placeholder="Message"
                className="para w-full border border-solid border-stone-400 px-4 py-2 md:text-lg"
              ></textarea>
              <button
                type="submit"
                className="send-message text-1.76xl mt-16 w-full cursor-pointer border-0 bg-stone-600  px-6 py-4 text-center font-normal leading-loose text-pink-50 hover:bg-pink-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
