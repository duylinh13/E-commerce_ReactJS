import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".categories")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories">
            <h4 onClick={toggleDropdown}>
              Bạn thuộc mệnh gì <i className="fa fa-chevron-down"></i>
            </h4>
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li>Mệnh Mộc</li>
                  <li>Mệnh Thổ</li>
                  <li>Mệnh Hỏa</li>
                  <li>Mệnh Thủy</li>
                  <li>Mệnh Kim</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="horizontal-nav"
            style={{ display: "flex", gap: "50px" }}
          >
            <Link
              to="/"
              style={{ margin: "0 5px", fontSize: "larger", color: "#1E90FF" }}
            >
              Home
            </Link>
            <Link
              to="/pages"
              style={{ margin: "0 5px", fontSize: "larger", color: "#1E90FF" }}
            >
              Pages
            </Link>
            <Link
              to="/user"
              style={{ margin: "0 5px", fontSize: "larger", color: "#1E90FF" }}
            >
              User Account
            </Link>
            <Link
              to="/vendor"
              style={{ margin: "0 5px", fontSize: "larger", color: "#1E90FF" }}
            >
              Vendor Account
            </Link>
            <Link
              to="/track"
              style={{ margin: "0 5px", fontSize: "larger", color: "#1E90FF" }}
            >
              Track my order
            </Link>
            <Link
              to="/contact"
              style={{ margin: "0 5px", fontSize: "larger", color: "#1E90FF" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
