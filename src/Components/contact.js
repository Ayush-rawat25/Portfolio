import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch w-11/12 mx-auto mt-32 mb-32 shadow-lg rounded-lg overflow-hidden">
      <div className="bg-white w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-center text-4xl font-mono font-bold text-gray-800">
          About Me
        </h1>
        <p className="text-center text-md text-gray-600 mt-6 leading-relaxed">
          I’m Ayush Rawat, a passionate Full-Stack Web Developer skilled in
          building modern, scalable, and visually appealing web applications.
          With hands-on experience in React, Tailwind CSS, Node.js, SQL, and
          other cutting-edge technologies, I specialize in creating seamless
          user experiences backed by strong, efficient backend systems.
        </p>
      </div>

      <div className="bg-zinc-900 w-full lg:w-1/2 p-8 text-white flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-lg">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
              className="w-full px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="sample@gmail.com"
              required
              className="w-full px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="4"
              required
              className="w-full px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-lg font-medium transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
