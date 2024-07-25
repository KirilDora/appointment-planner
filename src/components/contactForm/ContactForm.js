import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (event) => setName(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name"/>
      <input type="tel" value={phone} onChange={handlePhoneChange}
      pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
      placeholder="Enter phone"/>
      <input type="email" value={email} onChange={handleEmailChange}
      placeholder="Enter email"/>
      <button type="submit">Add</button>
    </form>
  );
};

