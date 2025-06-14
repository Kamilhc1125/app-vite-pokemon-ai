const Table = ({ response }) => {

  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Object.keys(response[0]).map((key) => (
              <th key={key} className="px-4 py-2 border-b border-gray-300 text-left">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {response.map((item, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              {Object.values(item).map((value, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border-b border-gray-300">
                  {typeof value === "object" ? JSON.stringify(value) : String(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Table;
