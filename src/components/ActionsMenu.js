import AlertDismissible  from "./AlertDismissible";

function ActionsMenu() {
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
        <AlertDismissible />
      </div>
    </>
  );
}

export default ActionsMenu;
