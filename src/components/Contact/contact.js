import React from 'react';
import './contact.css';
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Contact = () => {
  return (
      <section id="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <div className="links">
              <img src={linkedin} alt="Linkedin" className="link" />
              <a href='https://www.linkedin.com/in/mohammad-ibadur-rahman'>Linkedin</a>
              <img src={github} alt="Github" className="link" />
              <a href='https://github.com/MohammadIbad'>Github</a>
            </div>
        </div>
      </section>
  );
}

export default Contact;