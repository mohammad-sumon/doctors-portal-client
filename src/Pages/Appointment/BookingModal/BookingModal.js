import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  // treatment is just another name of appointmentOptions with name,slots, _id
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const slot = form.slot.value;
    const pname = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    // pname means patient name and
    // name means treatment name
    const booking = {
        appointmentDate: date,
        treatment: name,
        patient: pname,
        slot,
        email,
        phone
    }

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    console.log(booking);
    setTreatment(null);

    // ekhane console.log korle ekta key er jonno warning dite pare sejonno amra ei kaj ta korte pari. Jehetu amra slots k map korsi ar slots er moddhe unique kono id nei sehetu amra index diye dite pari. Cz jekono map er moddhe 3 ta jinis thake 'value', 'index', 'array'. Sample below...
    // [3, 4, 5].map((value, i) => console.log(value));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              disabled
              type="text"
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
