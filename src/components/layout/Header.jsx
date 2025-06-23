import { Link } from "react-router-dom";

const Header = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-semibold">Event Manager</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        {!isAuthenticated ? (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        ) : (
          <Link
            to="/dashboard"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Dashboard
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
