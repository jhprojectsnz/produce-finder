import MainNavBar from "../../components/main-navbar/main-navbar";
import "./stall-details-form.css";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

export default function StallDetailsForm() {
  //Variable to store search box ref
  const [searchBox, setSearchBox] = useState(null);

  //could try to change this so there are less rerenders on loading
  //avoid using state to store searchbox?
  const onSearchBoxLoad = (ref) => setSearchBox(ref);

  //Run whenever a new place is entered into the search bar
  //Uses the location of the place searched to update map center
  function placesChanged() {
    if (!searchBox) return;
    const place = searchBox.getPlace();
  }
  return (
    <>
      <MainNavBar />
      <section className="stall-details-form">
        <h2>Update Stall Details</h2>
        <div className="form-input-container">
          <label htmlFor="stall name">Stall name</label>
          <input type="text" id="stall name" name="stall name" required />
        </div>
        <div className="form-input-container">
          <label htmlFor="address">Address</label>
          <Autocomplete
            onLoad={onSearchBoxLoad}
            onPlaceChanged={placesChanged}
            restrictions={{ country: "nz" }}
          >
            <input type="text" id="address" name="address" required />
          </Autocomplete>
        </div>
        <div className="form-input-container">
          <label htmlFor="about">About</label>
          <textarea
            type="text"
            id="about"
            name="about"
            placeholder="Give a brief description about your stall..."
            required
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="about">Default opening times</label>
        </div>
        <div className="form-separator">
          <span>Contact details</span>
        </div>
        <p>
          <strong>Optional</strong> - these will be displayed to allow costumers
          to get in touch with you
        </p>
        <div className="form-input-container">
          <label htmlFor="number">Phone number</label>
          <input type="text" id="number" name="number" placeholder="optional" />
        </div>
        <div className="form-input-container">
          <label htmlFor="stall name">Email</label>
          <input
            type="text"
            id="stall name"
            name="stall name"
            placeholder="Optional"
          />
        </div>
      </section>
    </>
  );
}
