import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "react-bootstrap/Badge";
import { useCart } from "./ContextReducer";

function Navbar() {
  let data = useCart();

  const user = localStorage.getItem("user");
  // console.log(user);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <div>
      <nav
        className="navbar   navbar-expand-lg"
        // data-bs-theme="dark"
        style={{
          background: "orange",
          color: "white",
          // position: "fixed",
          // width: "100%",
          // zIndex: "2000",
          // top: "0",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 m-1 " to="/">
            Zomato
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 "></ul>

            {user ? (
              <>
                <div className="text-black">
                  <div className="dropdown">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <AccountCircleIcon fontSize="large" />
                      {user}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          aria-current="page"
                          to="/myorder"
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <div
                          className=" dropdown-item "
                          onClick={logout}
                          style={{ cursor: "pointer" }}
                        >
                          Logout
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to="/mycart">
                  <ShoppingCartIcon fontSize="large" className="text-black" />
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                </Link>
              </>
            ) : (
              <>
                <div
                  className="nav-item"
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "5px",
                    color: "black",
                  }}
                >
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
                <div
                  className="nav-item "
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "5px",
                    color: "black",
                  }}
                >
                  <Link className="nav-link active" to="/signup">
                    Sign up
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
