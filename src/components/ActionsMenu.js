import { useState } from "react";
import AlertDismissible  from "./AlertDismissible";
import { Button } from 'react-bootstrap';
import ModalForm from "./ModalForm";


function ActionsMenu() {
  const [showAlert, setShowAlert] = useState(false);
  const alertSwitch = () => setShowAlert(!showAlert)
  return (
    <>
      <h1 className="m-2 text-center">Mascotas</h1>
      <div className="d-flex">
        <ModalForm />
        <Button onClick={alertSwitch} className="btn btn-primary m-2">Show Alert</Button>
        {showAlert && <AlertDismissible alertSwitch={alertSwitch} /> }
      </div>
    </>
  );
}

export default ActionsMenu;
