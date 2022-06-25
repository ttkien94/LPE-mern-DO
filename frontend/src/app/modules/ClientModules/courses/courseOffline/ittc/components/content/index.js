import React from "react";
import "./styles/styles.scss";

function Content() {
  const contentList = [
    {
      title: 1,
      innerText: "Áp dụng Tâm Lý Học ở tất cả môi trường đào tạo khác nhau.",
      color: "hsl(0, 78%, 62%)",
    },
    {
      title: 2,
      innerText: "Ý thức về sự Hiện diện trên sân Khấu & Thu hút khán giả.",
      color: "hsl(180, 62%, 55%)",
    },
    {
      title: 3,
      innerText: "Sự kết nối & trình bày Đa giác quan.",
      color: "hsl(34, 97%, 64%)",
    },
    {
      title: 4,
      innerText:
        "Neo những bài học và ý tưởng chủ chốt để ghi nhớ chúng một cách sâu sắc.",
      color: "hsl(212, 86%, 64%)",
    },
    {
      title: 5,
      innerText: "Sự khác biệt giữa Tư vấn trị liệu & Đào tạo.",
      color: "hsl(0, 78%, 62%)",
    },
    {
      title: 6,
      innerText:
        "Đưa bản sắc riêng của bạn vào trong quá trình đào tạo/ tư vấn trị liệu.",
      color: "hsl(180, 62%, 55%)",
    },
    {
      title: 7,
      innerText: "Áp dụng NLP & Thôi Miên Trị Liệu một cách có ý thức.",
      color: "hsl(34, 97%, 64%)",
    },
    {
      title: 8,
      innerText: "Thiết kế và lên cấu trúc cho chương trình Đào Tạo.",
      color: "hsl(212, 86%, 64%)",
    },
    {
      title: 9,
      innerText:
        "Sử dụng Âm Nhạc & các vật dụng khác để gắn điều kiện cho vô thức.",
      color: "hsl(180, 62%, 55%)",
    },
    {
      title: 10,
      innerText:
        "Làm thế nào để “nhập cuộc” ngay sau khi nhận được Chứng Chỉ Nhà Đào Tạo.",
      color: "hsl(34, 97%, 64%)",
    },
  ];

  return (
    <div className="ittc-content">
      <h2 className="content-title text-center px-2">
        ITTC CHÍNH LÀ CÂU TRẢ LỜI CHO NHỮNG AI MONG MUỐN TRỞ THÀNH NHÀ ĐÀO TẠO
      </h2>

      <br />

      <div className="container">
        <div
          className="row"
          style={{
            justifyContent: "center",
          }}
        >
          {contentList.map((y, index) => {
            return (
              <div className="col-12 col-md-4 col-lg-3" key={index}>
                <div
                  className="box"
                  style={{
                    borderTop: `6px solid ${y.color}`,
                  }}
                >
                  <h2>{y.title}.</h2>
                  <p>{y.innerText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
