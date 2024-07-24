import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  const allUser = useSelector((state) => state.app.user);

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div className="flex mt-3">
      <button className=" ml-9 text-white">
        <Link to="/">Create Post</Link>
      </button>

      <button className=" ml-9 text-white">
        <Link to="/read"> All Post ({allUser.length})</Link>
      </button>
      <nav>
        <input
          className="bg-[#222630] px-4 py-1 outline-none w-[205px] ml-8 text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          name="text"
          placeholder="Search name..."
          type="text"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </nav>
    </div>
  );
};

export default Navbar;
