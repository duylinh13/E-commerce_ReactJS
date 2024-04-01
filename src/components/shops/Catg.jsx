import React from "react";

const Catg = () => {
  const data = [
    {
      cateName:
        "MỆNH MỘC: đen, xanh dương,  xanh lá cây, xanh nõn chuối, xanh da trời",
    },
    {
      cateName: "MỆNH THỔ:Đỏ, cam, hồng, tím",
    },
    {
      cateName: "MỆNH THỦY: trắng, xám, bạc, đen, xanh dương",
    },
    {
      cateName: "MỆNH HỎA:Màu xanh lá cây, đỏ, cam, hồng, tím",
    },
    {
      cateName: "MỆNH KIM: nâu đất, trắng, ghi(bạc), xám",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Tương sinh</h1>
          <h1>Tương Khắc</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>Tham khảo</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
