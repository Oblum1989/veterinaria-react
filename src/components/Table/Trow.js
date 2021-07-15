import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';

function Trow({ pet, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{pet.type}</td>
      <td>{pet.name}</td>
      <td>{pet.owner}</td>
      <td>
        <Button variant="outline-info" className="mr-1">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="outline-danger" className="mr-1">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
}

export default Trow;
