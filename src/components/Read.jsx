import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function Read() {
  const [radioData, setRadioData] = useState("");

  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const { user, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-[200px]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      {showPopup && <CustomModal id={id} setShowPopup={setShowPopup} />}

      <input
        className="mt-6"
        type="radio"
        checked={radioData === ""}
        name="gender"
        onChange={() => setRadioData("")}
      />
      <label className="text-white mr-2" htmlFor="">
        All
      </label>

      <input
        checked={radioData === "Male"}
        type="radio"
        name="gender"
        value="Male"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="text-white mr-2" htmlFor="">
        Male
      </label>

      <input
        checked={radioData === "Female"}
        type="radio"
        value="Female"
        name="gender"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="text-white mr-2" htmlFor="">
        Female
      </label>

      {user &&
        user
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if (radioData === "Male") {
              return ele.gender === radioData;
            } else if (radioData === "Female") {
              return ele.gender === radioData;
            } else {
              return ele;
            }
          })
          .map((ele) => (
            <div key={ele.id}>
              <div className=" flex justify-center mt-9 mb-8">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-sm">
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2 text-white">
                      {ele.name}
                    </h2>
                    <p className="text-sm mb-4 text-white">{ele.email}</p>
                    <p className="text-sm mb-4 text-white">{ele.gender}</p>
                    {/* <p className="text-sm mb-4 text-white">{ele.age}</p> */}
                    <div className="flex  justify-center space-x-4  m-auto">
                      <button
                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                        className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded  "
                      >
                        View
                      </button>
                      <button className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded  ">
                        <Link to={`/edit/${ele.id}`}>Update</Link>
                      </button>
                      <button
                        onClick={() => dispatch(deleteUser(ele.id))}
                        className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded  "
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Read;
