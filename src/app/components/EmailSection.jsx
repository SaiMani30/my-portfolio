"use client";
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailData, setEmailData] = useState({
    senderEmail: '',
    subject: '',
    message: '',
  });

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setShowButton(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = 'YOUR_SERVER_ENDPOINT';

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
        <h2 className="text-2xl font-bold mb-4" style={{ background: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Contact Us</h2>
        <p className="text-[#ADB7BE] mb-4">
          I&apos;m currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to connect, feel free to send me a message. I&apos;ll do my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 items-center mb-4">
          <a href="https://github.com/SaiMani30" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sai-manikanta-patro-b21011204" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/nameis_mani30/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/SaiManikantaPatro" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaFacebook size={30} />
          </a>

        </div>
      </div>

      <form
        className="email-form col-span-1"
        action="YOUR_SERVER_ENDPOINT"
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
          <button
            type="submit"
            style={{ background: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea)', color: 'white' }}
            className="font-medium py-2.5 px-5 rounded-lg hover:bg-primary-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default EmailSection;
