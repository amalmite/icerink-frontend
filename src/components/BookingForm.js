import React, { useContext, useState } from "react";
import "./BookingForm.css";
import { Mycontext } from "./context";
import { Form } from "react-bootstrap";

const BookingForm = () => {
  const { booking, setBooking } = useContext(Mycontext);
  const [formData, setFormData] = useState({
    selectedDate: "",
    membership: "",
    selectedSession: "",
    numAdmits: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking({ ...booking, ...formData });
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div>
        <h5 className="title-bg">BOOK NOW</h5>
        <Form className="p-4" onClick={handleSubmit}>
          <input
            type="date"
            placeholder="date"
            className="mt-2 mb-3 p-2"
            value={formData.selectedDate}
            onChange={handleInputChange}
          />

          <select
            className="mt-3 mb-3 p-2"
            value={formData.membership}
            onChange={handleInputChange}
          >
            <option>Select Membership</option>
            <option value="65">Skate 65</option>
            <option value="55">Skate 55</option>
            <option value="3">Skate with Coach</option>
          </select>

          <select
            className="mt-3 mb-3 p-2"
            value={formData.selectedSession}
            onChange={handleInputChange}
          >
            <option>Select Session</option>
            <option value="1">11:00 - 12:00</option>
            <option value="2">12:10 - 01:10</option>
            <option value="3">01:20 - 02:20</option>
            <option value="4">02:30 - 03:30</option>
            <option value="5">03:40 - 04:20</option>
            <option value="6">01:20 - 02:20</option>
          </select>

          <input
            className="mt-3 mb-3 p-2"
            type="number"
            placeholder="Number of Admissions"
            value={formData.numAdmits}
            onChange={handleInputChange}
          />
          <button className="form-button mt-1" type="submit">
            CHECK NOW
          </button>
        </Form>
      </div>
      {/* <h5 className="title-bg">BOOK NOW</h5>
      <div className="booking-container effect2">
      <form onSubmit={handleSubmit}>
        <div className="booking-field">
          <input
            type="date"
            id="selectedDate"
            value={formData.selectedDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="booking-field">
          <select
            id="membership"
            value={formData.membership}
            onChange={handleInputChange}
          >
            <option value="">Select Membership</option>
            <option value="65">Skate 65</option>
            <option value="55">Skate 55</option>
            <option value="3">Skate with Coach</option>
          </select>
        </div>
        <div className="booking-field">
          <select
            id="selectedSession"
            value={formData.selectedSession}
            onChange={handleInputChange}
          >
            <option value="">Select Session</option>
            <option value="session1">11:00 AM - 12:00 PM</option>
            <option value="session2">12:30 PM - 01:30 PM</option>
            <option value="session3">2:00 PM - 03:00 PM</option>
            <option value="session4">03:30 PM - 04:30 PM</option>
            <option value="session5">05:00 AM - 06:00 PM</option>
          </select>
        </div>
        <div className="booking-field">
          <input
            type="number"
            id="numAdmits"
            value={formData.numAdmits}
            onChange={handleInputChange}
            min={1}
            required
            placeholder="Number of Admissions"
          />
        </div>
        <button className="form-button" type="submit">
          CHECK NOW
        </button>
      </form>
    </div> */}
    </>
  );
};

export default BookingForm;
