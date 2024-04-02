import React from "react";

const Annocument = () => {
  const mystyle = {
    width: "25%",
    height: "350px",
  };
  const mystyle1 = {
    width: "60%",
    height: "350px",
  };
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img
              src="./images/category/nguhanh.png"
              alt="nguhanh"
              width="100%"
              height="100%"
            />
          </div>
          <div className="img" style={mystyle1}>
            <img
              src="./images/nguhanh2.png"
              alt="nguhanh2"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
