function TableHeader({ headings }) {
  return (
    <thead className="text-secondary-700 uppercase bg-secondary-50 text-center">
      <tr>
        <th></th>
        {headings.map((heading) => (
          <th scope="col" key={heading} className="px-6 py-3">
            {heading}
          </th>
        ))}
        <th />
      </tr>
    </thead>
  );
}
export default TableHeader;
