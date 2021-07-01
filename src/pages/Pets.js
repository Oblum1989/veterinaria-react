import HeaderBar from "../components/HeaderBar";
import ActionsMenu from "../components/ActionsMenu";
import Table from "../components/Table";
import Modal from "../components/Modal";

function Pets() {
  return (
    <div className="container mt-5">
      <HeaderBar />
      <ActionsMenu />
      <Table />
      <Modal />
    </div>
  );
}

export default Pets;
