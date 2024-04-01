import React from "react";

const Categories = () => {
  // Thay đổi data để chỉ chứa một ảnh và một dòng chữ
  const data = [
    {
      cateImg: "./images/category/nguhanh.png",
      cateName: "Ngủ Hành Tương Sinh Tương Khắc",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div>
              <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
              <img
                src="./images/category/nguhanh.png"
                alt="Ngủ Hành Tương Sinh Tương Khắc"
                style={{
                  width: "400px",
                  height: "400px",
                  display: "block",
                  margin: "auto",
                }}
                // Sửa lỗi cú pháp ở đây
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
