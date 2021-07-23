import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn btn-primary m-2">
        Nueva mascota
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Mascota</Modal.Title>
        </Modal.Header>
        <form id="form">
          <input type="hidden" name="id" id="inputId" />
          <Modal.Body>
            <div className="row g-3 mb-3">
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipo"
                >
                  <option selected>Tipo de animal</option>
                  <option>Perro</option>
                  <option>Gato</option>
                  <option>Pez</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="col">
                <select
                  id="dueno"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Dueño</option>
                  <option>Juan</option>
                  <option>Jose</option>
                  <option>Camilo</option>
                  <option>Sandra</option>
                </select>
              </div>
            </div>
          </Modal.Body>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" id="btnSave" onClick={handleClose}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;