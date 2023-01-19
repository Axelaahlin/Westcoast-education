import { useContext } from "react";
import ReactDOM from "react-dom";

import AddTeacher from "../Teachers/AddTeacher";
import AddCourse from "../Courses/AddCourse";

import GeneralContext from "../../store/general-context";

const Overlay = () => {
  return <div className="overlay"></div>
}

const ModalOverlay = (props) => {
  const context = useContext(GeneralContext)

  return (
        <div className="modal">
          {context.modalContent === "teacher" && <AddTeacher />}
          {context.modalContent === "course" && <AddCourse />}
        </div>
    )
  }

  const Modal = () => {
    return (
      <div className="modal">
        {ReactDOM.createPortal(
          <Overlay />,
          document.querySelector('#overlay-root'),
        )}
  
        {ReactDOM.createPortal(
          <ModalOverlay/>,
          document.querySelector('#modal-root'),
        )}
      </div>
    );
  };
  
  export default Modal;