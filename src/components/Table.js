function statusChange(data) {
  let status = "";
  if (data.operational === false) {
    status = "Not Operational";
  } else {
    status = "Operational";
  }
  return status;
}
const Table = ({ sat }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type of Satellite </th>
            <th>Launch Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
            return (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.launchDate}</td>
                <td>{statusChange(data)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      ;
    </div>
  );
};

export default Table;
