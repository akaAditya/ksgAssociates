import { useState } from "react";

const ContactUs = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputText, setInputText] = useState("");

  const Email = (e) => {
    setInputEmail(e.target.value);
  };
  const PhoneNumber = (e) => {
    setInputPhone(e.target.value);
  };
  const Message = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: inputEmail,
      phone: inputPhone,
      message: inputText,
    };
    console.log(data);
  };
  return (
    <section
      className="text-gray-600 body-font relative"
      style={{
        filter: "brightness(75%)",
        backgroundImage:
          'url("https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="container px-5 py-24 mx-auto flex brightness-200">
        <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 opacity-100 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg border-dotted border-4 border-slate-300">
          <form onSubmit={handleSubmit}>
            <h2 className="text-white text-3xl mb-1 font-medium title-font pb-4">
              Contact us...
            </h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-md text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={inputEmail}
                onChange={Email}
                required
                className="w-full bg-gray-300 rounded border border-gray-300 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label htmlFor="email" className="leading-7 text-md text-white">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                // value={inputPhone}
                onChange={PhoneNumber}
                required
                className="w-full bg-gray-300 rounded border text-gray-700 font-bold border-gray-300 focus:border-indigo-500 focus:bg-slate-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-md text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                // value={inputText}
                onChange={Message}
                required
                className="w-full bg-gray-300 rounded border font-bold border-gray-300 focus:border-indigo-500 focus:bg-slate-100 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 hover:text-slate-950 rounded text-lg"
            >
              Submit
            </button>
            <p className="text-sm text-white mt-3">
              {`Thank you for reaching out! We're here to assist you. Please leave your message, and we'll get back to you shortly.`}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
