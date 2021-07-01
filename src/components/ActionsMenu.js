function ActionsMenu() {
  return (
    <>
      <h1 className="m-2 text-center">Mascotas</h1>
      <div className="">
        <div
          id="alert"
          className="alert alert-danger alert-dismissible fade hide"
          role="alert"
        >
          <strong>Ups!</strong> Ha ocurrido un error
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="fas fa-plus"></i> Nueva mascota
        </button>
      </div>
    </>
  );
}

export default ActionsMenu;
