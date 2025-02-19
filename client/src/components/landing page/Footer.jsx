import React, { useState ,useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub,FaWhatsapp } from 'react-icons/fa';

import emailjs from '@emailjs/browser';
import { SiTrendmicro } from "react-icons/si";

const Footer = () => {
  // const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email) return alert("Please enter an email address");

  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://your-backend-api.com/send-email", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email }),
  //     });

  //     const data = await response.json();
  //     if (data.success) {
  //       alert("Your message has been sent to the admin!");
  //       setEmail("");
  //     } else {
  //       alert("Failed to send message. Please try again.");
  //     }
  //   } catch (error) {
  //     alert("Error sending message. Please check your connection.");
  //   }
  //   setLoading(false);
  // };
  

  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_hpnn66k', 'template_1geaq1t', form.current, {
          publicKey: 'smD-WJynXzKVPd107',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  return (
    <>
      <footer className="bg-gradient-to-t from-[#0f0f3d] to-gray-900 w-full text-white py-8 justify-between items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Branding */}
          <div className="text-center md:text-left">
            {/* <h2 className="text-2xl font-bold text-red-500 italiana-regular">Chandran</h2> */}
            {/* <img src="assets/Footer-logo.png" alt="my logo" className="mx-auto md:mx-0 h-auto" /> */}
            <h1 className="flex gap-2 mt-16 text-5xl"><SiTrendmicro className="mt-1 " />Trendz</h1>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-20">
          <a href="https://wa.me/+918344292756" className="text-blue-600 hover:text-blue-900 transition-colors">
        <FaFacebook size={30} />
      </a>
      <a href="https://wa.me/+918344292756" className="text-green-500 hover:text-green-800 transition-colors">
        <FaWhatsapp size={30} />
      </a>
      <a href="https://x.com/@chandra37430878" className=" text-slate-400 hover:text-blue-600 transition-colors">
        <FaTwitter size={30} />
        {/* <div className="relative group">
        <img src="assets/X-white.png" alt="X-logo" className="sm:w-8 md:w-8 lg:mt-0.5 object-cover transition-all duration-300 group-hover:grayscale-0 grayscale"   />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
      </div> */}
      </a>
      <a href="https://www.instagram.com/__mt_3" className="text-pink-600 hover:text-white transition-colors">
        <FaInstagram size={30} />
      </a>
      <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900 transition-colors">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/chaan3" target="_blank" rel="noopener noreferrer" >
      <FaGithub size={30} />
      </a>
    </div>
         

          {/* Projects Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Projects</h3>
            <ul className="mt-2 space-y-1 text-gray-400 ">
              <li className="hover:text-white">Streaming</li>
              <li className="hover:text-white">Hotel Accounts Management</li>
              <li className="hover:text-white">E-Commerce</li>
              <li className="hover:text-white">Gym Website</li>
              <li className="hover:text-white">Students Attendance System</li>
              
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Stay in Touch</h3>
            <p className="text-gray-400 mt-2">
            Need a custom website? Send your request to our email.
            </p>
            <form ref={form} onSubmit={sendEmail} className="mt-4 flex items-center">
              <input
              
                type="email"
                name="from_email"
                placeholder="Enter Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full rounded-l-lg text-black outline-none"
                // required
              />
              <button
                type="submit"
                className="bg-red-500 px-4 py-2 rounded-r-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "➤"}
              </button>
              
      
            </form>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-white">
        <div className="border-t border-gray-700 py-3 text-center">
          <p className="text-sm font-bold text-black">
            &copy; {new Date().getFullYear()} Trendz. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
