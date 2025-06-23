import EventCard from "../components/events/EventCard";
import SearchBar from "../components/events/SearchBar";
import { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  console.log(events);
  const handleSearch = async () => {
    try {
      const res = await api.get(`/event/search?title=${searchQuery}`);
      setEvents(res.data);

      // clear search bar
      setSearchQuery("");
    } catch (err) {
      console.error("Search error:", err);
    }
  };
  return (
    <section>
      <div className="flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">
          Welcome to Event Management System
        </h1>
      </div>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={handleSearch}
      />
      <EventCard isDelete={false} searchEvents={events} />
    </section>
  );
};

export default Home;
