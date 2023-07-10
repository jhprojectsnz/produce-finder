import "./stall-details-form.css";
import { Autocomplete } from "@react-google-maps/api";
import { useState, useReducer } from "react";
import { BiUpload } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import OpenHoursform from "../../components/open-hours-form/open-hours-form";
import { useUserContext } from "../../context/UserContext";

export default function StallDetailsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { stalls, setStalls } = useUserContext();
  console.log(id);
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
    const newAddress = place.formatted_address;
    const newLocation = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    dispatch({
      type: "autocomplete",
      address: newAddress,
      location: newLocation,
    });
  }

  const stallForUpdate = stalls.filter(
    (stall) => stall.stallId === parseInt(id)
  );

  const initialData =
    stallForUpdate.length > 0
      ? stallForUpdate[0]
      : {
          name: "",
          address: "",
          location: { lat: 0, lng: 0 },
          locationType: "",
          about: "",
          img: "testImg1",
          openTimes: {
            Monday: { open: false, openTime: "", closeTime: "" },
            Tuesday: { open: false, openTime: "", closeTime: "" },
            Wednesday: { open: false, openTime: "", closeTime: "" },
            Thursday: { open: false, openTime: "", closeTime: "" },
            Friday: { open: false, openTime: "", closeTime: "" },
            Saturday: { open: false, openTime: "", closeTime: "" },
            Sunday: { open: false, openTime: "", closeTime: "" },
          },
          contactDetails: {
            phone: "",
            email: "",
          },
        };

  const reducerMethod = (formData, action) => {
    switch (action.type) {
      case "name":
        return { ...formData, name: action.value };
      case "address":
        return {
          ...formData,
          address: action.value,
          location: { lat: 0, lng: 0 },
        };
      case "about":
        return { ...formData, about: action.value };
      case "phone":
        return {
          ...formData,
          contactDetails: { ...formData.contactDetails, phone: action.value },
        };
      case "email":
        return {
          ...formData,
          contactDetails: { ...formData.contactDetails, email: action.value },
        };
      case "autocomplete":
        return {
          ...formData,
          address: action.address,
          location: action.location,
        };
      case "openTime":
        return {
          ...formData,
          openTimes: {
            ...formData.openTimes,
            ...action.updatedDayData,
          },
        };
      default:
        return formData;
    }
  };

  const [formData, dispatch] = useReducer(reducerMethod, initialData);
  console.log(formData);
  //This function is used to update the stored form data whenever a text input is modified
  const handleTextInputChange = (e) => {
    dispatch({
      type: e.target.id,
      value: e.target.value,
    });
  };

  //This function will run when submit button is clicked
  const handleSubmit = () => {
    //Check that important fields are filled out
    //Add the formData to the database here, once the database is set up

    setStalls((prev) =>
      prev.map((stall) =>
        stall.stallId === formData.stallId ? formData : stall
      )
    );

    navigate(-1);

    console.log(formData);
  };

  return (
    <section className="stall-details-form">
      <h2>Update Stall Details</h2>
      <div className="form-input-container">
        <label htmlFor="name">Stall name</label>
        <input
          className="text-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="address">Address</label>
        <Autocomplete
          onLoad={onSearchBoxLoad}
          onPlaceChanged={placesChanged}
          restrictions={{ country: "nz" }}
          className="form-autocomplete"
        >
          <input
            className="text-input"
            type="text"
            id="address"
            name="address"
            placeholder=""
            value={formData.address}
            onChange={handleTextInputChange}
            required
          />
        </Autocomplete>
      </div>
      <div className="form-input-container">
        <label htmlFor="about">About</label>
        <textarea
          type="text"
          id="about"
          name="about"
          placeholder="Give a brief description about your stall..."
          value={formData.about}
          required
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="about">Default opening times</label>
        <OpenHoursform openTimes={formData.openTimes} dispatch={dispatch} />
      </div>
      <div className="form-input-container">
        <label htmlFor="image">Upload image</label>
        <button className="add-photo-btn">
          Add a photo
          <BiUpload />
        </button>
      </div>
      <div className="form-separator">
        <span>Contact details</span>
      </div>
      <p>
        <strong>Optional</strong> - these will be displayed to allow costumers
        to get in touch with you
      </p>
      <div className="form-input-container">
        <label htmlFor="phone">Phone number</label>
        <input
          className="text-input"
          type="text"
          id="phone"
          name="phone"
          value={formData.contactDetails.phone}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="phone">Email</label>
        <input
          className="text-input"
          type="text"
          id="email"
          name="email"
          value={formData.contactDetails.email}
          onChange={handleTextInputChange}
        />
      </div>
      <button className="form-submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </section>
  );
}
