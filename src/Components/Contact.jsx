import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <div id="Contact">
        <aside className="left">
          <h1> REACH OUT AND GET IN TOUCH</h1>
          <form className="formbox">
            <div className="input-box">
              <input type="text" name="" id="" required />
              <span>FIRST NAME</span>
            </div>
            <div className="input-box">
              <input type="text" required />
              <span>LAST NAME</span>
            </div>
            <div className="input-box">
              <input type="text" name="" id="" required />
              <span>EMAIL</span>
            </div>
            <div className="input-box">
              <textarea name="" id="message" cols="30" rows="2"></textarea>
              <span className="span-textarea">Drop Down your Message </span>
            </div>
            <button className="form-btn">SUBMIT</button>
          </form>
        </aside>
        <aside className="right"></aside>
      </div>
    </>
  );
};

export default Contact;
