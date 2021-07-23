import HeaderBar from "../components/HeaderBar";
import ActionsMenu from "../components/ActionsMenu";
import Table from "../components/Table/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalForm from "../components/ModalForm";

function Pets() {
  return (
    <>
      <HeaderBar />
      <div className="container mt-5">
        <ActionsMenu />
        <Table />
        <ModalForm />
      </div>
    </>
  );
}

export default Pets;
