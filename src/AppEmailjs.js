import "./App.css";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function App() {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
console.log(form.current)
    emailjs.sendForm('service_b2esf7f', 'template_lk7qlik', form.current, 'user_25BYA73n1qm1kFTNRQimn')
      .then((result) => {
          console.log(result.text);
          alert("SUCCESS!");
      }, (error) => {
          console.log(error.text);
          alert("FAILED...", error);
      });
  };

  
  return (
<div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Email - JavaScript Contact Form</h1>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
           {/* <!-- name --> */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
