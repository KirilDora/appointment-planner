import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, onAdd}) => {
  /*
  Define state variables for 
  appointment info
  */
  console.log("AppointmentPage" + contacts);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState(new Date().getFullYear());
  const [time, setTime] = useState(new Date().getTime());

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    onAdd(name, date, time);
    setName('');
    setContact('');
    setTime('');
    setDate('');
  };


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...{contacts, name, setName, contact, setContact, date, setDate, time, setTime, handleSubmit}} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointment={appointments}/>
      </section>
    </div>
  );
};