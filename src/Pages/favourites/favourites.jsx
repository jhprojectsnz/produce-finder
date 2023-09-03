import "./favourites.css";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import ResultsList from "../../components/results-list/results-list";
import SectionHeading from "../../components/section-heading/section-heading";

export default function Favourites({ setSelectedStall }) {
  const { currentUser, stalls } = useUserContext();
  const [favouriteStalls, setFavouriteStalls] = useState([]);

  useEffect(() => {
    //find users favourite stalls from database here??
    //or just store them in context as soon as user logs in?

    //Below is a substitute until back end and database is in place
    //Get IDs of users favourite stalls
    const usersFavourteStallIds = currentUser.favouriteStalls;
    //filter all stalls to get data for users favourites
    const favouriteStallsData = stalls.filter((stall) =>
      usersFavourteStallIds.includes(stall.stallId)
    );
    //save favourite stalls data to state to populate page
    setFavouriteStalls(favouriteStallsData);
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
