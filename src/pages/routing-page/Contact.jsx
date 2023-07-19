import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form field values using the state variables (name, email, message)
    // For example, you can send an HTTP request to a server or display a success message
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"100vh",gap:'3rem',flexDirection:'column'}}>

    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'3rem',flexDirection:'column'}} >
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'3rem',flexDirection:'column'}} >
        <div> <label htmlFor="name" style={{marginRight:"15px"}}>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /></div>
       
<div>
<label htmlFor="email" style={{marginRight:"15px"}} >Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
</div>
        
<div>
<label htmlFor="message" style={{marginRight:"15px"}}>Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
</div>
        

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
