const Button = ({ type = "submit", text }) => {

  return (
    <button
      type={type}
      className="text-white bg-[#0ea982] hover:opacity-85 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 mb-2 cursor-pointer"
    >
      {text.toUpperCase()}
    </button>
  )
}

export default Button;
