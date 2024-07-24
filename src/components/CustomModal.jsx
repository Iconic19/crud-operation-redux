import { useSelector } from "react-redux";
import "./customModal.css";
const CustomModal = ({ id, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.user);
  const singleUser = allUsers.filter((ele) => ele.id == id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className=" ml-[200px] border border-black"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>

        <h2> {singleUser[0].name}</h2>
        <h3> {singleUser[0].email}</h3>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomModal;
