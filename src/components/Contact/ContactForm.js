import React, { useEffect, useState } from "react";

function ContactForm() {
  useEffect(() => {
    document.title = "Contact";
  });

  // declare state vars for inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // state var for err message
  const [errMsg, setErrMsg] = useState('');


  const handleInputChange = (e) => {
    // vars for value and name of selected input
    const { target } = e;
    const input = target.name;
    const inputVal = target.value;

    // set state based on input type
    if (input === 'name') {
        setName(inputVal);
    } else if (input === 'email') {
        setEmail(inputVal);
    } else if (input === 'message') {
        setMessage(inputVal);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // set err message if the fields are empty
    if (!email || !name) {
        setErrMsg('Invalid name/email.');
        return;
    }
    if (!message) {
        setErrMsg('Please write a message!');
        return;
    }

    // if all is good set state to default
    setErrMsg('');
    setEmail('');
    setName('');
    setMessage('');
  }

  return (
    <section>
     <h1>Contact Me</h1>
     <form>
         <div>
             <label htmlFor="name">Name:</label>
             <input type="text" name="name" value={name} onChange={handleInputChange}/>
         </div>
         <div>
             <label htmlFor="email">Email Address:</label>
             <input type="email" name="email" value={email} onChange={handleInputChange}/>
         </div>
         <div>
             <label htmlFor="message">Message:</label>
             <textarea name="message" rows='5' value={message} onChange={handleInputChange}/>
         </div>
         <button type="button" onClick={handleFormSubmit}>Submit</button>
     </form>
     {errMsg && (
         <div>
             <p>{errMsg}</p>
         </div>
     )}
    </section>
  );
}

export default ContactForm;
