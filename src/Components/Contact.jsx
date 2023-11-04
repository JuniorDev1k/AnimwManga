import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <div id="Contact">
        <aside className="left">
          <h1> REACH OUT AND GET IN TOUCH</h1>
          <p></p>
          <form>
            <div className="first-input">
              <input type="text" placeholder="FIRST NAME" name="" id="" />
              <input type="text" placeholder="LAST NAME" name="" id="" />
            </div>

            <input type="email" placeholder="EMAIL ADRESS" name="" id="" />
            <textarea name="" id="message" cols="30" rows="10">
              WRITE DOWN YOUR COMMENT
            </textarea>
          </form>
        </aside>
        <aside className="right"></aside>
      </div>
    </>
  );
};

export default Contact;
