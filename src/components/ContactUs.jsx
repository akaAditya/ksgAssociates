import { useState } from "react";

const ContactUs = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setInputEmail(e.target.email.value)
    setInputText(e.target.message.value)
  }


  return (
    <section
      className="text-gray-600 body-font relative b"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 opacity-90 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg border-dotted border-4 border-slate-300">
          <h2 className="text-white text-3xl mb-1 font-medium title-font">
            Contact us...
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            We are here to help you!
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-md text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputEmail}
              className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-md text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={inputText}
              className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button onClick={handleSubmit} className="text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
            Button
          </button>
          <p className="text-sm text-white mt-3">
          {`Thank you for reaching out! We're here to assist you. Please leave your message, and we'll get back to you shortly.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
