import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <>
            <p className="contact-description">Please use this form to submit an email to the item's owner. You
            have 24 hours to contact the owner before you lose your "dibs" on
            the item.</p>
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/moqpkqew"
                method="POST"
            >
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email"
                    required />
                <label>Message:</label>
                <textarea 
                    type="text" 
                    name="message" 
                    rows="3" 
                    placeholder="Enter your message" 
                    required />
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}