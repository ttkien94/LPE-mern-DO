import React from "react";
import "./styles/styles.scss";

function CardPrice({ item, utm_source }) {
  return (
    <div className="cardPrice-container">
      <p className="color-text">{item.name}</p>
      <p className="price-text">
        {item.price?.toLocaleString()}
        <span>VNĐ</span>
      </p>

      {item.outOfDate ? (
        <p className="cardPrice_outOfDate">
          <span>{item.outOfDate}</span>
        </p>
      ) : (
        <div className="null-div"></div>
      )}

      <a
        href={
          "/chuong-trinh-huan-luyen/online/run-faster/register?utm_source=" +
          utm_source
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={`button-register ${item.disabled && "disabled"}`}
          disabled={item.disabled}
        >
          Đăng ký ngay
        </button>
      </a>
    </div>
  );
}

export default CardPrice;
