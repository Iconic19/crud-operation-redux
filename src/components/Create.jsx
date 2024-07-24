import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import { showUser } from "../features/userDetailSlice";
const Create = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // dispatch(showUser());
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    navigate("/read");
  };

  return (
    <div className="flex mt-[160px] justify-center h-screen dark  ">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Form</h2>

        <form
          className="flex flex-wrap justify-center  "
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleInput}
            type="text"
            name="name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
            placeholder="Full Name"
          />
          <input
            onChange={handleInput}
            type="email"
            name="email"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Email"
          />
          <input
            onChange={handleInput}
            name="age"
            type="text"
            className="bg-gray-700 text-gray-200 mr-[20px] border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
            placeholder="Age"
          />

          <div className="mb-3 ml-3">
            <input
              name="gender"
              type="radio"
              value="Male"
              onChange={handleInput}
            />
            <label className="text-white" htmlFor="">
              Male
            </label>
          </div>

          <div className="mb-3 ml-3 text-white mr-[52px]">
            <input
              name="gender"
              value="Female"
              type="radio"
              onChange={handleInput}
            />
            <label className="text- white" htmlFor="">
              Female
            </label>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Create;
