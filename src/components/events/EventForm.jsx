import { useState } from "react";
import api from "../../services/api";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (banner) formData.append("banner", banner);

    try {
      const res = await api.post("/event/add", formData);

      console.log("Event created:", res?.data);

      setTitle("");
      setDescription("");
      setBanner(null);

      alert("Event created successfully!");
    } catch (err) {
      console.error("Error creating event:", err);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded h-24"
          required
        ></textarea>

        {/* Custom File Upload */}
        <label
          htmlFor="banner-upload"
          className="flex items-center justify-center cursor-pointer border border-dashed border-gray-400 rounded h-32 mb-6 hover:bg-gray-100 transition"
        >
          {banner ? (
            <img
              src={URL.createObjectURL(banner)}
              alt="Banner Preview"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-600">
              {/* Upload Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-3-3m3 3l3-3M12 4v8"
                />
              </svg>
              <span>Click to upload banner</span>
            </div>
          )}
        </label>
        <input
          type="file"
          id="banner-upload"
          accept="image/*"
          onChange={(e) => setBanner(e.target.files[0])}
          className="hidden"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
