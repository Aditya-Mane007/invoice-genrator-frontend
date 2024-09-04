import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="flex-grow-0">
        <Navbar />
      </nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <footer className="flex-grow-0">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
