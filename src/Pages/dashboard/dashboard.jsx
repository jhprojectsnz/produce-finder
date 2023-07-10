import "./dashboard.css";
import DashboardNav from "../../components/dashboard-nav/dashboard-nav";
import { Routes, Route } from "react-router-dom";
import StallSearch from "../../components/stall-search/stall-search";
import Favourites from "../../components/Favourites/favourites";
import MyStalls from "../../components/my-stalls/my-stalls";

export default function Dashboard() {
  return (
    <section className="dashboard-container">
      <h2>Welcome back</h2>
      <DashboardNav />
      <Routes>
        <Route path="search" element={<StallSearch />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="mystalls" element={<MyStalls />} />
      </Routes>
    </section>
  );
}
