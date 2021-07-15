import { useState } from "react";
import Thead from "./Thead";
import Trow from "./Trow";

function Table() {
  const [pets, setPets] = useState([
    {
      type: "perro",
      name: "coraje",
      owner: "oscar",
      updated_at: new Date(),
      created_at: new Date(),
    },
    {
      type: "perro",
      name: "coraje",
      owner: "oscar",
      updated_at: new Date(),
      created_at: new Date(),
    },
    {
      type: "perro",
      name: "coraje",
      owner: "oscar",
      updated_at: new Date(),
      created_at: new Date(),
    },
    {
      type: "perro",
      name: "coraje",
      owner: "oscar",
      updated_at: new Date(),
      created_at: new Date(),
    },
    {
      type: "perro",
      name: "coraje",
      owner: "oscar",
      updated_at: new Date(),
      created_at: new Date(),
    },
    {
      type: "perro",
      name: "coraje",
      owner: "oscar",
      updated_at: new Date(),
      created_at: new Date(),
    },
    {
      type: "perro",
      name: "coraje",
      owner: "manhuel",
      updated_at: new Date(),
      created_at: new Date(),
    },
  ]);

  const columns = pets.length > 0 ? Object.keys(pets[0]) : [];
  return (
    <table className="table caption-top">
      <Thead columns={columns} />
      <tbody id="list-pets">
        {pets.map((pet, key) => (
          <Trow pet={pet} index={key} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
