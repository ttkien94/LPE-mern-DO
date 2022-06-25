import React from "react";
import Item01 from "../../assets/item01.png";
import Item02 from "../../assets/item02.png";
import Item03 from "../../assets/item03.png";
import Item04 from "../../assets/item04.png";

import "./styles/styles.scss";

function ItemList() {
  const iconList = [
    {
      icon: Item01,
      text: "Có khả năng đào tạo như Mr Vas.",
    },
    {
      icon: Item03,
      text: "Trở thành người đồng hành cùng Mr. Vas.",
    },
    {
      icon: Item04,
      text: "Tạo dựng thương hiệu và trao bằng Chứng nhận chuẩn Quốc tế.",
    },
    {
      icon: Item02,
      text: "Xây dựng hệ thống đào tạo & mang đến khắp mọi nơi.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {iconList.map((item, index) => {
          return (
            <div className="col-6 col-md-3 my-3 mb-md-0" key={index}>
              <div className="wrapper-ittc_item">
                <div className="ittc-icon">
                  <img src={item.icon} alt={item.icon} className="img-fluid" />
                </div>
                <p className="ittc-text">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
