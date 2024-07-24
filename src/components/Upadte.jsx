import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const { user } = useSelector((state) => state.app);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      const singleUser = user.filter((ele) => ele.id === id);
      if (singleUser.length > 0) {
        setUpdateData(singleUser[0]);
      }
    }
  }, [id, user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div className="flex mt-[160px] justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Form</h2>

        <form className="flex flex-wrap justify-center" onSubmit={handleUpdate}>
          <input
            value={updateData.name || ""}
            onChange={newData}
            type="text"
            name="name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
            placeholder="Full Name"
          />
          <input
            value={updateData.email || ""}
            onChange={newData}
            type="email"
            name="email"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Email"
          />
          <input
            value={updateData.age || ""}
            onChange={newData}
            name="age"
            type="text"
            className="bg-gray-700 text-gray-200 mr-[20px] border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
            placeholder="Age"
          />

          <div className="mb-3 ml-3">
            <input
              onChange={newData}
              name="gender"
              type="radio"
              value="Male"
              checked={updateData.gender === "Male"}
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
              checked={updateData.gender === "Female"}
              onChange={newData}
            />
            <label className="text-white" htmlFor="">
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

export default Update;
