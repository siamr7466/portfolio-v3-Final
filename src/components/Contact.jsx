import React from "react";
import { CONTACT } from "..";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p>
          <a href="tel:+8801725963600" className="my-4">
            {CONTACT.phoneNo}
          </a>
        </p>
        <a href="mailto:siamrahmanoffice@gmail.com">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
