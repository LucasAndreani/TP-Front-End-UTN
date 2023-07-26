import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    if (fullName.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill all the forms.');
    } else {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2000);
    }
  };

  return (
    <div className='contact-container'>
      <p>Contact</p>
      <label htmlFor='full-name'>Full Name</label>
      <input
        type='text'
        id='full-name'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className={fullName.trim() === '' ? 'input-error' : ''}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={email.trim() === '' ? 'input-error' : ''}
      />
      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={message.trim() === '' ? 'input-error' : ''}
      ></textarea>
      <button onClick={handleSend}>Send</button>
      {isSent && <div className='sent-message'>Sent!</div>}
    </div>
  );
};

export default Contact;