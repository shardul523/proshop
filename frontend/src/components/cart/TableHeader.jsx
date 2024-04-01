const defaultHeadings = ["", "Name", "Price", "Quantity", "Total", ""];

function TableHeader({ headings = defaultHeadings }) {
  return (
    <thead className="text-secondary-700 uppercase bg-secondary-300 text-center">
      <tr>
        {headings.map((heading, i) => (
          <th scope="col" key={i} className="px-6 py-3">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHeader;
