import EventCard from "../components/events/EventCard";

const Home = () => {
  return (
    <section>
      <div className="flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">
          Welcome to Event Management System
        </h1>
      </div>
      <EventCard isDelete={false} />
    </section>
  );
};

export default Home;
