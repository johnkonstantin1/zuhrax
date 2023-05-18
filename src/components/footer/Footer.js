// // import React from 'react'
// // import { SiDatabricks } from 'react-icons/si'
// // import { BsFillArrowUpCircleFill } from 'react-icons/bs'
// // import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
// // import './Footer.css'

// // import { Link } from 'react-scroll'

// // const Footer = () => {
// //     return (
// //         <div className='footer'>
// //             <div className="container">
// //                 <div className="top">
// //                     <div className="logo-footer">
// //                         <SiDatabricks className='icon' />
// //                         <h2>Denatech</h2>
// //                     </div>
// //                     <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
// //                         <BsFillArrowUpCircleFill className='icon' />
// //                     </Link>

// //                 </div>
// //                 <div className="col-container">
// //                     <div className="col">
// //                         <h3>Navigation</h3>
// //                         <p>Home</p>
// //                         <p>Data</p>
// //                         <p>Cloud</p>
// //                         <p>Contact</p>
// //                     </div>
// //                     <div className="col">
// //                         <h3>My Account</h3>
// //                         <p>Home</p>
// //                         <p>Data</p>
// //                         <p>Cloud</p>
// //                         <p>Contact</p>
// //                     </div>
// //                     <div className="col">
// //                         <h3>Information</h3>
// //                         <p>Home</p>
// //                         <p>Data</p>
// //                         <p>Cloud</p>
// //                         <p>Contact</p>
// //                     </div>
// //                     <div className="col">
// //                         <h3>Legal</h3>
// //                         <p>Home</p>
// //                         <p>Data</p>
// //                         <p>Cloud</p>
// //                         <p>Contact</p>
// //                     </div>
// //                     <form>
// //                         <h3>Contact us</h3>
// //                         <input type="email" placeholder='Enter your email' />
// //                         <FiMail className='mail-icon' />
                        
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Footer;

// import React, { useState } from 'react';
// import { SiDatabricks } from 'react-icons/si';
// import { BsFillArrowUpCircleFill } from 'react-icons/bs';
// import { FiMail } from 'react-icons/fi';
// import './Footer.css';
// import { Link } from 'react-scroll';
// import emailjs from 'emailjs-com';

// const Footer = () => {
//   const [message, setMessage] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', e.target, 'YOUR_EMAILJS_USER_ID')
//       .then((response) => {
//         console.log('Email successfully sent!', response);
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//       });

//     e.target.reset();
//     setMessage('');
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div className='footer'>
//       <div className="container">
//         <div className="top">
//           <div className="logo-footer">
//             <SiDatabricks className='icon' />
//             <h2>Denatech</h2>
//           </div>
//           <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
//             <BsFillArrowUpCircleFill className='icon' />
//           </Link>
//         </div>
//         <div className="col-container">
//           <div className="col">
//             <h3>Navigation</h3>
//             <p>Home</p>
//             <p>Data</p>
//             <p>Cloud</p>
//             <p>Contact</p>
//           </div>
//           <div className="col">
//             <h3>My Account</h3>
//             <p>Home</p>
//             <p>Data</p>
//             <p>Cloud</p>
//             <p>Contact</p>
//           </div>
//           <div className="col">
//             <h3>Information</h3>
//             <p>Home</p>
//             <p>Data</p>
//             <p>Cloud</p>
//             <p>Contact</p>
//           </div>
//           <div className="col">
//             <h3>Legal</h3>
//             <p>Home</p>
//             <p>Data</p>
//             <p>Cloud</p>
//             <p>Contact</p>
//           </div>
//           <form onSubmit={sendEmail}>
//             <h3>Contact us</h3>
//             <input type="email" placeholder='Enter your email' name="email" required />
//             <textarea
//               placeholder='Enter your message'
//               name="message"
//               value={message}
//               onChange={handleMessageChange}
//               required
//             />
//             <FiMail className='mail-icon' />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import './Footer.css';
import { Link } from 'react-scroll';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', e.target, 'YOUR_EMAILJS_USER_ID')
      .then((response) => {
        console.log('Email successfully sent!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    e.target.reset();
    setEmail('');
    setMessage('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className='icon' />
            <h2>Denatech</h2>
          </div>
          <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <BsFillArrowUpCircleFill className='icon' />
          </Link>
        </div>
        <div className="contact-container">
          <form onSubmit={sendEmail}>
            <h3>Contact us</h3>
            <div className="input-group">
              {/* <FiMail className='mail-icon' /> */}
              <input type="email" placeholder='Enter your email' name="email" value={email} onChange={handleEmailChange} required />
            </div>
            <textarea
              placeholder='Enter your message'
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Phone: 0636803012</p>
            <p>Email: bionic.dnepr@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
