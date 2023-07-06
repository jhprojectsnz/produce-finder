import "./my-stalls.css";
import isOpen2 from "../../functions/isOpen2";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import MainNavBar from "../../components/main-navbar/main-navbar";

export default function MyStalls() {
  const stall = {
    name: "Jim's Fruit Stall",
    address: "3785 test st, auckland, nz",
    location: { lat: 0, lng: 0 },
    locationType: "",
    about: "The is a test stall",
    img: "testImg1",
    openTimes: {
      Monday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
      Tuesday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
      Wednesday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
      Thursday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
      Friday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
      Saturday: { open: false, openTime: "", closeTime: "" },
      Sunday: { open: false, openTime: "", closeTime: "" },
    },
    contactDetails: {
      phone: "557837987",
      email: "dfdpofiod@test.com",
    },
    inStock: [
      {
        item: "Oranges",
        amount: "each",
        price: "$1",
      },
      {
        item: "Apples",
        amount: "1kg",
        price: "$5",
      },
    ],
  };

  const stallIsOpen = isOpen2(stall.openTimes);
  return (
    <>
      <MainNavBar />
      <section className="my-stall-container">
        <h2>My Stalls</h2>
        <div className="stall-update-container">
          <h3>{stall.name}</h3>
          <div className="open-update-container">
            <h5>Status:</h5>
            <p className={stallIsOpen ? "open" : "closed"}>
              {stallIsOpen ? "Open" : "Closed"}
            </p>
            <FaEdit className={stallIsOpen ? "open" : "closed"} />
          </div>
          <div className="update-instock-container">
            <h5>In Stock:</h5>
            {stall.inStock.map((item) => (
              <div className="update-item-container" key={item.item}>
                <p>{`${item.item} (${item.amount})`}</p>
                <p>{item.price}</p>
                <FaEdit className="update-icon" />
                <FaRegTrashAlt className="update-icon" />
              </div>
            ))}
            <button className="update-add-btn">Add</button>
          </div>
          <div className="update-btn-container">
            <button className="update-btn">View preview</button>
            <button className="update-btn">Edit details</button>
          </div>
        </div>
        <button className="add-stall-btn">Add Stall</button>
      </section>
    </>
  );
}
