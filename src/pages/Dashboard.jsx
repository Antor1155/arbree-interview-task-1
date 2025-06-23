import { useNavigate } from "react-router-dom";
import EventCard from "../components/events/EventCard";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/create-event")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          create event
        </button>
      </div>
      <p className="text-center">Welcome! You are logged in.</p>

      <EventCard />
    </div>
  );
};

export default Dashboard;
