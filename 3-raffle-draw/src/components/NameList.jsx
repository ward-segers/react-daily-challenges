export default function NameList({ names }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              #
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, i) => (
            <tr
              key={i}
              className="border-t hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-4 py-2 text-sm text-gray-700">{i + 1}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
