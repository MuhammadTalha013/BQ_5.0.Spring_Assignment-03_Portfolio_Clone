function Navbar(props) {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{props.title}</h1>
      <ul className="flex gap-6">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;