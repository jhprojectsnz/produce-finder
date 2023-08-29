import "./popular-stalls.css";
import { useUserContext } from "../../context/UserContext";
import ResultsList from "../results-list/results-list";

export default function PopularStalls({ setSelectedStall }) {
  const { stalls } = useUserContext();
  // For now just take first 6 stalls in array
  // Could introduce more complex logic here later - based on likes, clicks, favourites ...
  const firstFiveStalls = stalls.slice(0, 6);
  return (
    <section className="popular-stalls">
      <h2>Popular Stalls</h2>
      <ResultsList
        stallsList={firstFiveStalls}
        setSelectedStall={setSelectedStall}
      />
    </section>
  );
}
