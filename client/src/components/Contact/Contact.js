import React from "react";
import Wrapper from "../Wrapper/Wrapper"

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
    const style = {
      textarea: {
        height: "200px"
      }, 
    }
    return (
      <div>
        <Wrapper>
        <div className="container mx-auto pt-2">
          <div className="space-y-4">
              <div className="block border mb-4 rounded overflow-hidden shadow-lg">
                 <div className="text-center text-lg p-5">Please use this form to submit an email to the item's owner. You
                  have 24 hours to contact the owner before you lose your "dibs" on
                   the item.
                  </div>

              </div>
            
            <form
                className="block border mb-4 rounded overflow-hidden shadow-lg p-5"
                onSubmit={this.submitForm}
                action="https://formspree.io/f/moqpkqew"
                method="POST"
            >
                <div className="block font-bold text-xl p-3 underline">Email:</div>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email"
                    required
                    className="block py-2 px-9 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                     />
                     <hr className="mt-3"/>
                <div className="block font-bold text-xl p-3 underline">Message:</div>
                <textarea 
                    type="text" 
                    name="message" 
                    rows="3" 
                    placeholder="Enter your message" 
                    required
                    className="block flex-2 ml-1 py-1 px-1 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                    style={style.textarea} />
                <hr className="pt-2"/>
                {status === "SUCCESS" ? <p>Thanks!</p> : <button className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg focus:outline-none flex-2 ml-2 block">Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                <br />
            </form>
            <br />
          </div>
        </div>
        <br />
        <br />
        </Wrapper>
      </div>
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