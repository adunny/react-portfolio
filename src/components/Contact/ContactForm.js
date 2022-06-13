import React, { useEffect, useState } from "react";
import ghLogo from "../../assets/logos/gh-logo64.png";
import liLogo from "../../assets/logos/in34.png";

function ContactForm() {
  useEffect(() => {
    document.title = "Contact";
  });

  // declare state vars for inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // state var for err message
  const [errMsg, setErrMsg] = useState("");

  const handleInputChange = (e) => {
    // vars for value and name of selected input
    const { target } = e;
    const input = target.name;
    const inputVal = target.value;

    // set state based on input type
    if (input === "name") {
      setName(inputVal);
    } else if (input === "email") {
      setEmail(inputVal);
    } else if (input === "message") {
      setMessage(inputVal);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // set err message if the fields are empty
    if (!email || !name) {
      setErrMsg("Invalid name/email.");
      return;
    }
    if (!message) {
      setErrMsg("Please write a message!");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      setErrMsg("Message submitted!");
      
      if (!response.ok) {
        throw new Error("Something went wrong..");
      }
    } catch (err) {
      setErrMsg(err.message);
    }
    // if all is good set state to default
    setEmail("");
    setName("");
    setMessage("");
  };

  const contactCards = [
    {
      name: "GitHub",
      img: ghLogo,
      link: "https://github.com/adunny",
    },
    {
      name: "LinkedIn",
      img: liLogo,
      link: "https://www.linkedin.com/in/alen-dunn-505b8215b/",
    },
  ];

  return (
    <section>
      <div className="container mt-4">
        <h2>Leave a Message</h2>
        <div className="row">
          <div className="col-6 p-3">
            <form>
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
            {errMsg && (
              <div>
                <p>{errMsg}</p>
              </div>
            )}
          </div>
          <div className="col-6 p-3">
            <br />
            {contactCards.map((card) => (
              <div key={card.name} className="card mb-3 bg-light">
                <div className="row g-0">
                  <div className="col-md-4">
                    <a href={card.link}>
                      <img
                        src={card.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-end">
                      <h5 className="card-title">{card.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
