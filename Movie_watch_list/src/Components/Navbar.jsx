import { uselist } from "../Context";


function Navbar() {
    const {list} = uselist();
     

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h1 className="text-lg font-semibold">MovieList</h1>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>🔖</span>
        <span>My list {list.length}</span>
      </div>
    </nav>
  );
}

export default Navbar;