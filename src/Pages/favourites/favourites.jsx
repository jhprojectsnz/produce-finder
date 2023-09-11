import "./favourites.css";

import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ResultsList from "../../components/results-list/results-list";
import SectionHeading from "../../components/section-heading/section-heading";

export default function Favourites({ setSelectedStall }) {
  const { currentUser, stalls } = useUserContext();
  const navigate = useNavigate();
  const [favouriteStalls, setFavouriteStalls] = useState([]);

  useEffect(() => {
    // Check if there is a current user, otherwise redirect to log in page
    if (currentUser.userId) {
      // Find users favourite stalls from database here??
      // Or just store them in context as soon as user logs in?

      // Below is a substitute until back-end and database is in place
      // Get IDs of users favourite stalls
      const usersFavourteStallIds = currentUser.favouriteStalls;
      // Filter all stalls to get data for users favourites
      const favouriteStallsData = stalls.filter((stall) =>
        usersFavourteStallIds.includes(stall.stallId)
      );
      // Save favourite stalls data to state to populate page
      setFavouriteStalls(favouriteStallsData);
    } else {
      navigate("/login");
    }
  }, [currentUser, stalls]);

  return (
    <section className="favourites">
      <SectionHeading>Favourites</SectionHeading>
      <ResultsList
        stallsList={favouriteStalls}
        setSelectedStall={setSelectedStall}
      />
    </section>
  );
}
