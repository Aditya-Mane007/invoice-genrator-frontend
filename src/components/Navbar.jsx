import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container d-flex justify-content-between align-items-center py-2 bg-light">
      <Link to="/" className="text-black">
        <h5>Invoice Generator</h5>
      </Link>
      <div className="btn bg-black text-white">
        <Link to="https://github.com/Aditya-Mane007" className="text-white">
          Github
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
