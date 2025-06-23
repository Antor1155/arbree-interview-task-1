// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";

import api from "../../services/api";

const Dashboard = ({ isDelete = false }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/event/all");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventId) => {
    try {
      const deleted = await api.delete(`/event/${eventId}`);
      if (deleted) {
        setEvents((prev) => prev.filter((e) => e._id !== eventId));
      }
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <img
              src={`http://localhost:5000/${event.banner}`}
              alt="Event"
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-700">{event.description}</p>
            {isDelete && (
              <button
                onClick={() => handleDeleteEvent(event._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
