import React from 'react';

function Contact() {
  return (
    <form className="flex flex-col gap-2">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="textbox" placeholder="Message here" />
      <button>Send</button>
    </form>
  );
}

export default Contact;
