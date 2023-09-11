import "./stall-details-form.css";
import { useState, useReducer } from "react";
import { BiUpload } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import OpenHoursForm from "../../components/open-hours-form/open-hours-form";
import SelectStallDetails from "../../components/select-stall-details/select-stall-details";
import { useUserContext } from "../../context/UserContext";
import ButtonStd from "../../components/button-std/button-std";
import SectionHeading from "../../components/section-heading/section-heading";
import LocationSearch from "../../components/location-search/location-search";

export default function StallDetailsForm() {
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

  // Runs whenever a new location is entered into the address search bar
  function handleAddressChanged(location) {
    const newAddress = location.formatted_address;
    const newLocation = {
      lat: location.geometry.location.lat(),
      lng: location.geometry.location.lng(),
    };
    dispatch({
      type: "autocomplete",
      address: newAddress,
      location: newLocation,
    });
  }

  const stallForUpdate = id
    ? stalls.filter((stall) => stall.stallId === parseInt(id))
    : false;

  const nextIdNumber = stalls[stalls.length - 1].stallId + 1;
  const userId = currentUser.userId;

  const initialData = stallForUpdate
    ? stallForUpdate[0]
    : {
        stallId: nextIdNumber,
        ownerId: userId,
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
        inStock: [],
        organic: false,
        marketStall: false,
        eftposPayment: false,
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
      case "details":
        return {
          ...formData,
          [action.value]: !formData[action.value],
        };
      default:
        return formData;
    }
  };

  const [formData, dispatch] = useReducer(reducerMethod, initialData);

  console.log(formData);

  // This function is used to update the stored form data whenever a text input is modified
  const handleTextInputChange = (e) => {
    dispatch({
      type: e.target.id,
      value: e.target.value,
    });
  };

  // This function will run when submit button is clicked
  // In full version with database - Add the formData to the database here
  const handleSubmit = () => {
    // Update existing stall - find stall and update with formData
    // Else - add formData as a new stall at end of stalls array
    if (stallForUpdate) {
      setStalls((prev) =>
        prev.map((stall) =>
          stall.stallId === formData.stallId ? formData : stall
        )
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
        stallForUpdate ? "Update" : "New"
      } Stall Details`}</SectionHeading>
      <div className="form-input-container">
        <label htmlFor="name">Stall name</label>
        <input
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
        <LocationSearch
          placeholder={""}
          onPlacesChanged={handleAddressChanged}
          name={"address"}
        />
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
        <label htmlFor="about">Open times</label>
        <OpenHoursForm openTimes={formData.openTimes} dispatch={dispatch} />
      </div>
      <div className="form-input-container">
        <label htmlFor="image">Upload image</label>
        <button className="add-photo-btn" onClick={handleAddImage}>
          Add a photo
          <BiUpload />
        </button>
        {addImageAttempt && <p>Add photo coming soon...</p>}
      </div>
      <div className="form-input-container">
        <label htmlFor="open-times">Stall details</label>
        <SelectStallDetails formData={formData} dispatch={dispatch} />
      </div>
      <div className="form-separator">
        <span>Contact details</span>
      </div>
      <p>
        <strong>Optional</strong> - These will be displayed to allow costumers
        to get in touch with you
      </p>
      <div className="form-input-container">
        <label htmlFor="phone">Phone number</label>
        <input
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
          type="text"
          id="email"
          name="email"
          value={formData.contactDetails.email}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="form-btn-container">
        <ButtonStd appearance="light" handleClick={handleCancel}>
          Cancel
        </ButtonStd>
        <ButtonStd appearance="dark" handleClick={handleSubmit}>
          {stallForUpdate ? "Save" : "Submit"}
        </ButtonStd>
      </div>
    </section>
  );
}
