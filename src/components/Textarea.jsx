const Textarea = ({ value, onChange, rows, placeholder = "" }) => {
  return (
    <>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Your message
      </label>
      <textarea
        id="message"
        value={value}
        onChange={onChange}
        rows={rows}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 resize-none"
        placeholder={placeholder}></textarea>
    </>

  )
}

export default Textarea;
