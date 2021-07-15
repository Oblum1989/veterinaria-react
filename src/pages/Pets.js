import HeaderBar from "../components/HeaderBar";
import ActionsMenu from "../components/ActionsMenu";
import Table from "../components/Table/index";
import Modal from "../components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';

function Pets() {
  return (
    <>
      <HeaderBar />
      <div className="container mt-5">
        <ActionsMenu />
        <Table />
        <Modal />
      </div>
    </>
  );
}

export default Pets;
