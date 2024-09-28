import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      search.classList.toggle("active", window.scrollY > 100);
    };

    const throttledScroll = throttle(handleScroll, 200); // Hàm throttle để giảm tải
    window.addEventListener("scroll", throttledScroll);

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div
            className="logo width"
            style={{
              fontFamily: "ThienCo",
              color: "#1E90FF",
              fontSize: "27px",
              fontWeight: "bold",
            }}
          >
            Thiên Cơ
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
