import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container d-flex justify-content-between align-items-center py-2 bg-light">
      <Link to="/" className="text-black">
        <h5>Invoice Generator</h5>
      </Link>

      <div className="row">&copy; {year} Invoice Generator</div>
    </div>
  );
}

export default Footer;
