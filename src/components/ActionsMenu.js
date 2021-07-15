import { useState } from "react";
import AlertDismissible  from "./AlertDismissible";
import { Button } from 'react-bootstrap';


function ActionsMenu() {
  const [showAlert, setShowAlert] = useState(false);
  const alertSwitch = () => setShowAlert(!showAlert)
  return (
    <>
      <h1 className="m-2 text-center">Mascotas</h1>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-primary m-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="fas fa-plus"></i> Nueva mascota
        </button>
        <Button onClick={alertSwitch}>Show Alert</Button>
        {showAlert && <AlertDismissible alertSwitch={alertSwitch}/> }
      </div>
    </>
  );
}

export default ActionsMenu;
