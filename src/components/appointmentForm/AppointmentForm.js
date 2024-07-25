import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleTitleChange = (e) => {setName(e.target.value)};
  const handleDateChange = (e) => {setDate(e.target.value)};
  const handleTimeChange = (e) => {setTime(e.target.value)};
  const handleOnChange = (e) => {setContact(e.target.value)}

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handleTitleChange} />
      <input value={date} type="date" onChange={handleDateChange} min={getTodayString()}/>
      <input value={time} type="time" onChange={handleTimeChange}/>
      <ContactPicker contacts={contacts} value={contact} name="contacts" onChange={handleOnChange} />
      <button type="submit">Add</button>
    </form>
  );
};
