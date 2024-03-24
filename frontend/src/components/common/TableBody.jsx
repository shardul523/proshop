function TableRow() {
  return (
    <tr className="bg-white border-b dark:border-secondary-700">
      <td>{"Image"}</td>
      <td>Name</td>
      <td>Price</td>
      <td>Quantity</td>
      <td>Delete</td>
    </tr>
  );
}

function TableBody({ orderItems }) {
  return (
    <tbody className="text-center ">
      {orderItems.map((item) => (
        <TableRow key={item.product} />
      ))}
    </tbody>
  );
}
export default TableBody;
