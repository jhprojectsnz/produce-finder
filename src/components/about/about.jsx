import "./about.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import farmImg from "../../assets/farm-image.jpg";
import healthImg from "../../assets/healthy-image.jpg";
import saveImg from "../../assets/save-image.jpg";
import stallImg from "../../assets/fruit-stall-image.jpg";
import ButtonStd from "../button-std/button-std";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="about" id="about">
      <div className="about-section-container">
        <h2>About Find Fresh Produce</h2>
        <p>
          A community connecting New Zealanders with local fruit and vegetable
          growers.
        </p>
        <p>
          Whether you are looking for a juicy apple, a crunchy carrot, or a
          leafy lettuce, there’s bound to be a roadside stall, market or local
          store in your area.
        </p>
        <p>
          Join us and discover the diversity and deliciousness of New Zealand's
          fruit and vegetables.
        </p>
      </div>
      <h3>- Benefits of buying local produce -</h3>
      <div className="about-all-benifits">
        <div className="about-benefit-container">
          <div className="about-image-container">
            <img
              className="about-image"
              id="cartoon-farm-image"
              src={farmImg}
              alt="Local grower"
            />
          </div>
          <p>
            Support local farmers, reduce food waste and reduce carbon emissions
          </p>
        </div>
        <div className="about-benefit-container">
          <div className="about-image-container">
            <img
              className="about-image"
              id="heart-vegetable-image"
              src={healthImg}
              alt="healthy produce"
            />
          </div>
          <p>
            Fresh, high quality fruit and vegetables: essential for health and
            well-being
          </p>
        </div>
        <div className="about-benefit-container">
          <div className="about-image-container">
            <img
              className="about-image"
              id="piggy-bank-image"
              src={saveImg}
              alt="Save money"
            />
          </div>
          <p>Save money by going straight to the source</p>
        </div>
      </div>
      <div className="about-section-container">
        <h2>Supporting Local Growers</h2>
        <p>
          Are you a fresh fruit or vegetable grower looking for new customers?
          Do you want to connect with your local community and share your
          passion for healthy and delicious food?
        </p>
        <p>
          Find Fresh Food is a platform that allows you to list your stall and
          sell directly to consumers in your area. You can set your own prices
          and availability. By joining you will not only increase your sales,
          but also help more people access fresh and nutritious food.
        </p>
        <p className="bold">Sign up and start selling your produce today!</p>
        <div className="about-btn-container">
          <ButtonStd
            handleClick={() => navigate("/login")}
            options={["bold", "light"]}
          >
            Sign up
          </ButtonStd>
        </div>
      </div>
      <img className="about-stall-image" src={stallImg} alt="Roadside stall" />
    </section>
  );
}
