const Footer = () => {

  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline">Kamil Małaszewicz</a>. Powered by OpenAI. All Rights Reserved.
        </span>

      </div>
    </footer>
  )
}

export default Footer;
