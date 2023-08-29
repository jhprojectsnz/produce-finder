import "./popular-stalls.css";
import { useUserContext } from "../../context/UserContext";
import ResultsList from "../results-list/results-list";

export default function PopularStalls({ setSelectedStall }) {
  const { stalls } = useUserContext();
  const firstFiveStalls = stalls.slice(0, 5);
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
