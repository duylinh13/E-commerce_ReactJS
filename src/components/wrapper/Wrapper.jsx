import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Giao hàng trên toàn Thế giới",
      decs: "Chúng tôi cung cấp giá cả cạnh tranh trên 100 triệu của chúng tôi cộng với sản phẩm bất kỳ phạm vi.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Thanh toán an toàn và nhanh chóng",
      decs: "Tích hợp tất cả các ví điện tử thẻ ngân hàng trên toàn Thế giới",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Tự tin mua sắm ",
      decs: "Chúng tôi cung cấp giá cả cạnh tranh trên 100 triệu của chúng tôi cộng với sản phẩm bất kỳ phạm vi.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "Hổ trợ 24//7 ",
      decs: "Đội ngủ nhân viên thúc trực, sẵn sàng tư vấn cho tất cả mọi người",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
