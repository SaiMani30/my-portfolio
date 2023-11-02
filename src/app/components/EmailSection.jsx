"use client";
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailData, setEmailData] = useState({
    senderEmail: '', // Add senderEmail field
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = 'http://localhost:3000/send'; // Set it to the correct server endpoint

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    };

    try {
      const response = await fetch(endpoint, options);
      const data = await response.json();

      if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  return (
    <section id="contact" className="grid grid-cols-2 gap-8 p-6 text-white mt-8" style={{ marginTop: '8em' }}>
      <div className="contact-info col-span-1">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-[#ADB7BE] mb-4">
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to connect, feel free to send me a message. I'll do my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 items-center mb-4">
          <a href="https://github.com/SaiMani30" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sai-manikanta-patro-b21011204" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      
      <form
        className="email-form col-span-1"
        action="/send"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="senderEmail" className="text-white">Your Email</label>
          <input
            type="email"
            name="senderEmail"
            required
            placeholder="Your Email (e.g., your-email@example.com)"
            value={emailData.senderEmail}
            onChange={handleInputChange}
            className="p-2 bg-[#18191E] text-white rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="text-white">Subject</label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            value={emailData.subject}
            onChange={handleInputChange}
            className="p-2 bg-[#18191E] text-white rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-white">Message</label>
          <textarea
            name="message"
            required
            placeholder="Your message..."
            value={emailData.message}
            onChange={handleInputChange}
            className="p-2 bg-[#18191E] text-white rounded-lg w-full"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-primary-500 hover-bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default EmailSection;
