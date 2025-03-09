import  { useRef, useState } from "react";

export default function ContactForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzks4jFjaFkVQEuvAHol0hJmw86jni2yFubSw-wmSZtgIViK-Kb7VwTFXWA0bfBXng/exec';
  const formRef = useRef(null);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const submitBtn = form.querySelector('#send-msg');
    submitBtn.disabled = true;

    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        setAlertMessage('Message Sent Successfully!');
        setTimeout(() => {
          setAlertMessage('');
        }, 5000);
        form.reset();
        submitBtn.disabled = false;
      })
      .catch(error => {
        console.error('Error!', error.message);
        submitBtn.disabled = false;
      });
  };

  return (
    <div className="contact-form">
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form-f" name="submit-to-google-sheet">
        <div className="form-group">
          <input type="text" id="name" name="Name" placeholder="Name" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="Email" required placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
          <textarea id="message" name="Message" required placeholder="Enter your message" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-dark" id="send-msg">Send Message</button>
        </div>
        <div id="alert">{alertMessage}</div>
      </form>
    </div>
  );
}
