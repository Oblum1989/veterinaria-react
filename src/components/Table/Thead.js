function Thead(props) {
  if (props.columns.lenght === 0) return false;
  return (
    <thead className="table-dark">
      <tr>
        <th scope="col">#</th>
        {props.columns.map((column) => (
          <th scope="col">{column}</th>
        ))}
        <th scope="col"></th>
      </tr>
    </thead>
  );
}

export default Thead;
