function TableHeader({ headings }) {
  return (
    <thead className="text-secondary-700 uppercase bg-secondary-300 text-center">
      <tr>
        {headings.map((heading) => (
          <th scope="col" key={heading} className="px-6 py-3">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHeader;
