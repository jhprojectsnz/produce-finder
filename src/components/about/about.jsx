import "./about.css";
import farmImg from "../../assets/farm-image.jpg";
import healthImg from "../../assets/healthy-image.jpg";
import saveImg from "../../assets/save-image.jpg";
import stallImg from "../../assets/fruit-stall-image.jpg";
import ButtonStd from "../button-std/button-std";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="about">
      <h2>Welecome To Find Fresh Produce</h2>
      <p>
        A community connecting New Zealand families with local growers and
        farmers
      </p>
      <p>
        Whether you are looking for a juicy apple, a crunchy carrot, or a leafy
        lettuce, there’s bound to be a roadside stall, market stand or local
        store in your area.
      </p>
      <p>
        Join us and discover the diversity and deliciousness of New Zealand's
        fruit and vegetables
      </p>
      <h3>- Benefits of buying local produce -</h3>
      <div className="about-benefit-container">
        <img className="about-image" src={farmImg} alt="Local grower" />
        <p>
          Support local farmers, reduce food waste and reduce carbon emissions
        </p>
      </div>
      <div className="about-benefit-container">
        <img className="about-image" src={healthImg} alt="healthy produce" />
        <p>
          Fresh, high quality fruit and vegetables: essential for health and
          well-being
        </p>
      </div>
      <div className="about-benefit-container">
        <img className="about-image" src={saveImg} alt="Save money" />
        <p>Save money by going straight to the source</p>
      </div>
      <h2>Supporting Local Producers</h2>
      <p>
        Are you a fresh fruit or vegetable grower looking for new customers? Do
        you want to connect with your local community and share your passion for
        healthy and delicious food?
      </p>
      <p>
        Find Fresh Food is a platform that allows you to list your produce and
        sell it directly to people in your area. You can set your own prices and
        availability. By joining you will not only increase your sales, but also
        help people access fresh and nutritious food that they can trust.
      </p>
      <p>Sign up and start selling your produce today!</p>
      <ButtonStd
        handleClick={() => navigate("/login")}
        appearance="light"
        options={["bold"]}
      >
        Sign up
      </ButtonStd>
      <img className="about-stall-image" src={stallImg} alt="Roadside stall" />
    </section>
  );
}
