import "./stall-details-form.css";

import React from "react";
import { useState, useReducer, useMemo } from "react";
import { BiUpload } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import testImg1 from "../../assets/test-image-1.jpg";

import { useUserContext } from "../../context/UserContext";
import SelectStallDetails from "../../components/select-stall-details/select-stall-details";
import OpenHoursForm from "../../components/open-hours-form/open-hours-form";
import ButtonStd from "../../components/button-std/button-std";
import SectionHeading from "../../components/section-heading/section-heading";
import LocationSearch from "../../components/location-search/location-search";

export default function StallDetailsForm() {
  // If the form is being used to update a stall - get that stall id from the URL
  const { id } = useParams();
  const navigate = useNavigate();
  const { stalls, setStalls, currentUser, setCurrentUser } = useUserContext();
  const [addImageAttempt, setAddImageAttempt] = useState(false);

  // If the user is not logged in or URL ID doesn't match one of their stalls return error
  if (
    !currentUser.userId ||
    (id && !currentUser.stalls.includes(parseInt(id)))
  ) {
    return (
      <div className="form-access-error">
        <h3>Error</h3>
        <p>You do not have permission to access this page</p>
      </div>
    );
  }

  // Create an initial data object to initialise useReducer - either data from stall to be updated or blank data set
  const initialData = useMemo(() => {
    // If the form is being used to update a stall - get stall data
    const stallForUpdate = id
      ? stalls.filter((stall) => stall.stallId === parseInt(id))
      : null;

    // Generate a new stall ID number
    const newStallIdNumber = stalls[stalls.length - 1].stallId + 1;

    return stallForUpdate
      ? stallForUpdate[0]
      : {
          stallId: newStallIdNumber,
          ownerId: currentUser.userId,
          name: "",
          address: "",
          location: { lat: 0, lng: 0 },
          locationType: "",
          about: "",
          img: testImg1,
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
          inStock: [],
          organic: false,
          marketStall: false,
          eftposPayment: false,
        };
  }, []);

  // Update formData based on action type from dispatch
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
      case "details":
        return {
          ...formData,
          [action.value]: !formData[action.value],
        };
      default:
        return formData;
    }
  };

  // Create formData variable that can be updated using dispatch and the reducerMethod
  const [formData, dispatch] = useReducer(reducerMethod, initialData);

  // Called whenever a new location is entered into the address search bar
  // Takes a google maps place object as a "location"
  function handleAddressChanged(location) {
    const newAddress = location.formatted_address;
    // Take the address details that come before the second comma, just "...., ....."
    const newFormatedAddress = newAddress.replace(/(.*?,.*?),.*/, "$1");
    const newLocation = {
      lat: location.geometry.location.lat(),
      lng: location.geometry.location.lng(),
    };
    dispatch({
      type: "autocomplete",
      address: newFormatedAddress,
      location: newLocation,
    });
  }

  // Updates formData whenever a text input is modified
  const handleTextInputChange = (e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value,
    });
  };

  // In full version with database - Use formData to update database here
  const handleSubmit = () => {
    // Updating an existing stall - find stall and update with formData
    // Else - add formData as a new stall at end of stalls array
    if (id) {
      setStalls((prev) =>
        prev.map((stall) =>
          stall.stallId === formData.stallId ? formData : stall,
        ),
      );
    } else {
      setStalls((prev) => [...prev, formData]);
      setCurrentUser((prev) => ({
        ...prev,
        stalls: [...prev.stalls, formData.stallId],
      }));
    }
    // Go back one page
    navigate(-1);
  };

  function handleCancel() {
    // Go back one page
    navigate(-1);
  }

  // In full version add ability to add image here
  function handleAddImage() {
    setAddImageAttempt(true);
  }

  return (
    <section className="stall-details-form">
      <SectionHeading>{`${
        id ? "Update" : "New"
      } Stall Details`}</SectionHeading>
      <div className="form-input-container">
        <label htmlFor="name">Stall name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="address">Address</label>
        <LocationSearch
          placeholder={""}
          onPlacesChanged={handleAddressChanged}
          name={"address"}
          initialValue={formData.address}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="about">About</label>
        <textarea
          type="text"
          name="about"
          placeholder="Give a brief description about your stall..."
          value={formData.about}
          required
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="openTimes">Open times</label>
        <OpenHoursForm openTimes={formData.openTimes} dispatch={dispatch} />
      </div>
      <div className="form-input-container">
        <label htmlFor="image">Upload image</label>
        <button className="add-photo-btn" onClick={handleAddImage}>
          Add a photo
          <BiUpload />
        </button>
        {addImageAttempt && (
          <p className="form-error">Add photo coming soon...</p>
        )}
      </div>
      <div className="form-input-container">
        <label htmlFor="open-times">Stall details</label>
        <SelectStallDetails formData={formData} dispatch={dispatch} />
      </div>
      <div className="form-separator">
        <span>Contact details</span>
      </div>
      <p className="contact-details-text">
        <strong>Optional</strong> - These will be displayed to allow costumers
        to get in touch with you
      </p>
      <div className="form-input-container">
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          name="phone"
          value={formData.contactDetails.phone}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="phone">Email</label>
        <input
          type="text"
          name="email"
          value={formData.contactDetails.email}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-btn-container">
        <ButtonStd options={["light"]} handleClick={handleCancel}>
          Cancel
        </ButtonStd>
        <ButtonStd options={["dark"]} handleClick={handleSubmit}>
          {id ? "Save" : "Submit"}
        </ButtonStd>
      </div>
    </section>
  );
}
