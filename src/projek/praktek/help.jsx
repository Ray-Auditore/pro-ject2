import { Link } from "react-router-dom";

const Help = () => {
  // Untuk tombol kembali

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-yellow-500 mb-6">Help Page</h1>

        {/* Tombol Navigasi */}
        <div className="space-y-4">
          <Link
            to="/userlist"
            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition duration-200"
          >
            User List
          </Link>

          <Link
            to="/create"
            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition duration-200"
          >
            Create Account
          </Link>

          <Link
            to="/update"
            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition duration-200"
          >
            Update Account
          </Link>
          <Link
            to="/delete"
            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition duration-200"
          >
            Delete Account
          </Link>
        </div>

        {/* Tombol Kembali */}
        <Link to="/">
          <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition duration-200">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Help;

