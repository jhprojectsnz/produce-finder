import "./my-stalls.css";
import isOpen2 from "../../functions/isOpen2";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import MainNavBar from "../../components/main-navbar/main-navbar";
import { useState } from "react";
import UpdateItemModal from "../../components/update-item-modal/update-item-modal";

export default function MyStalls() {
  const [stalls, setStalls] = useState([
    {
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
    },
    {
      name: "Jim's Market Stall",
      address: "68 Queen st, auckland, nz",
      location: { lat: 0, lng: 0 },
      locationType: "",
      about: "This is another test market stall",
      img: "testImg1",
      openTimes: {
        Monday: { open: false, openTime: "", closeTime: "" },
        Tuesday: { open: false, openTime: "", closeTime: "" },
        Wednesday: { open: false, openTime: "", closeTime: "" },
        Thursday: { open: false, openTime: "", closeTime: "" },
        Friday: { open: false, openTime: "", closeTime: "" },
        Saturday: { open: false, openTime: "8:00am", closeTime: "12:00pm" },
        Sunday: { open: false, openTime: "", closeTime: "" },
      },
      contactDetails: {
        phone: "557837987",
        email: "dfdpofiod@test.com",
      },
      inStock: [
        {
          item: "Peaches",
          amount: "each",
          price: "$2",
        },
        {
          item: "Watermelons",
          amount: "1kg",
          price: "$2",
        },
        {
          item: "Carrots",
          amount: "small bag",
          price: "$3",
        },
      ],
    },
  ]);

  const [displayItemModal, setDisplayItemModal] = useState(false);

  function handleUpdateitem(stallIndex, itemIndex) {
    console.log(stalls);
    setDisplayItemModal({ stallIndex: stallIndex, itemIndex: itemIndex });
  }

  return (
    <>
      <MainNavBar />
      <section className="my-stall-container">
        <h2>My Stalls</h2>
        {stalls.map((stall, stallIndex) => {
          const stallIsOpen = isOpen2(stall.openTimes);
          return (
            <div className="stall-update-container" key={stall.name}>
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
                {stall.inStock.map((item, itemIndex) => (
                  <div className="update-item-container" key={item.item}>
                    <p>{`${item.item} (${item.amount})`}</p>
                    <p>{item.price}</p>
                    <FaEdit
                      className="update-icon"
                      onClick={() => handleUpdateitem(stallIndex, itemIndex)}
                    />
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
          );
        })}
        <button className="add-stall-btn">Add Stall</button>
        {displayItemModal && (
          <UpdateItemModal
            stallIndex={displayItemModal.stallIndex}
            itemIndex={displayItemModal.itemIndex}
            stalls={stalls}
            setStalls={setStalls}
            setDisplayItemModal={setDisplayItemModal}
          />
        )}
      </section>
    </>
  );
}
