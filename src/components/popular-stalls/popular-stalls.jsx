import "./popular-stalls.css";

import React from "react";
import { useUserContext } from "../../context/UserContext";

import ResultsList from "../results-list/results-list";
import SectionHeading from "../section-heading/section-heading";

export default function PopularStalls({ setSelectedStall }) {
  const { stalls } = useUserContext();
  // For now just take first 6 stalls in array
  // Could introduce more complex logic here later - based on likes, clicks, favourites ...
  const popularStalls = stalls.slice(0, 6);
  return (
    <section className="popular-stalls">
      <SectionHeading>Popular Stalls</SectionHeading>
      <ResultsList
        stallsList={popularStalls}
        setSelectedStall={setSelectedStall}
      />
    </section>
  );
}
