import LPEBanner from "app/components/banner";
import useSiteTitle from "core/hooks/useSiteTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import media dile
import tuyendung01 from "assets/images/source/tuyendung/tuyen-dung1.jpg";
import tuyendung02 from "assets/images/source/tuyendung/tuyen-dung2.jpg";
import tuyendung03 from "assets/images/source/tuyendung/tuyen-dung3.jpg";
import tuyendung04 from "assets/images/source/tuyendung/tuyen-dung4.jpg";
import banner from "assets/images/source/banner/thong-tin-tuyen-dung.jpg";

import "./styles/styles.scss";

function Recruitment() {
  useSiteTitle("recruitment");

  const spotLight = [
    {
      icon: <i className="fas fa-brain"></i>,
      title: "Niềm đam mê",
      desc: "Một công viêc với niềm đam mê",
    },

    {
      icon: <i className="fas fa-city"></i>,
      title: "Môi trường",
      desc: "Bạn tự do thể hiện tài năng của mình",
    },

    {
      icon: <i className="far fa-money-bill-alt"></i>,
      title: "Lương + Thưởng",
      desc: "Mức lương + thưởng hấp dẫn - xứng đáng với năng lực cá nhân",
    },

    {
      icon: <i className="fas fa-chart-line"></i>,
      title: "Cơ hội",
      desc: "Tham gia nhiều chương trình đào tạo - huấn luyện NLP của công ty",
    },
  ];

  const jobList = [
    {
      jobTitle: "Digital Marketing",
      jobDesctiption:
        "SEO - Chạy quảng cáo, thống kê & phân tích quảng cáo đa kênh",
    },
    {
      jobTitle: "Content",
      jobDesctiption: "Marketing, Brand, PR",
    },
    {
      jobTitle: "Copywriter",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "IT Helpdesk",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "Chăm sóc khách hàng/nhân viên kinh doanh",
      jobDesctiption: "Marketing, Brand, PR",
    },
    {
      jobTitle: "Thiết kế",
      jobDesctiption: "Thiết kế đồ họa",
    },
    {
      jobTitle: "Dịch thuật tài liệu và video",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "Hành chính nhân sự",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "Video",
      jobDesctiption: "Quay + dựng video",
    },
    {
      jobTitle: "Kỹ thuật - âm thanh",
      jobDesctiption: "Part-time",
    },
  ];

  const companyImgSrc = [tuyendung01, tuyendung02, tuyendung03, tuyendung04];

  return (
    <div className="recruitment-page">
      {/* Background Title */}
      <LPEBanner
        bannerImg={banner}
        headText="Hãy cùng với chúng tôi tạo nên bước đột phá"
        subText="Đó là một hành trình và tất cả chúng ta chỉ mới ở điểm khởi đầu"
      />

      {/* Spotlight  */}

      <section className="container py-5">
        <h2 className="spotLightMainTitle">
          Điểm đáng chú ý ở công việc tại LPE
        </h2>
        <div className="row">
          {spotLight.map((spotLight) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-3 mb-4 mb-md-4 mb-lg-0"
                key={spotLight.title}
              >
                <div className="spotLightItem">
                  {spotLight.icon}

                  <h4>{spotLight.title}</h4>
                  <p>{spotLight.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video */}
      <section className="container py-5">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/CRe6uT_u078"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="iFrameVideo"
        ></iframe>
      </section>

      {/* Find Job */}
      <section className="container py-5">
        <h2 className="spotLightMainTitle">Tìm kiếm đam mê của bạn</h2>

        <div className="row">
          {jobList.map((job, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 mt-4" key={index}>
                <div className="jobItem">
                  <h4>{job.jobTitle}</h4>

                  <p>{job.jobDesctiption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Loved */}
      <section className="container py-3">
        <h4 className="lovedTitle">Bạn yêu thích</h4>

        <ul className="lovedList">
          <p>- Phục vụ, phụng sự và trao giá trị đến cho mọi người</p>
          <p>- Tham gia chạy event các khóa học NLP</p>
          <p>
            - Các hoạt động kích hoạt khả năng phi thường trong bạn (leo núi,
            teambuilding;..)
          </p>
          <p>
            - Phát triển bản thân, muốn có cuộc sống tốt đẹp hơn, kiểm soát cảm
            xúc tốt, tư duy phát triển, chuyên môn phát triển
          </p>
          <p>- Môi trường làm việc lâu dài, cởi mở, hòa đồng, vui vẻ</p>
          <p>- Phát huy nhiều tài năng lẻ của bản thân</p>
        </ul>
      </section>

      {/* interest */}
      <section className="container py-3">
        <h4 className="lovedTitle">Quyền lợi của bạn</h4>

        <ul className="lovedList">
          <p>- Tham gia đầy đủ các chế độ, phúc lợi của người lao động</p>
          <p>- Thu nhập tăng ca đặc biệt x200% với đơn giá 1 giờ lương</p>
          <p>- Mỗi tuần off 1 ngày tái tạo năng lượng</p>
          <p>- Companytrip mỗi năm</p>
          <p>- Teambuilding</p>
          <p>
            - Các chế độ phúc lợi nội bộ từ công ty (thưởng KPI, thưởng doanh
            số,…)
          </p>
          <p>- Lương thưởng tháng 13</p>
        </ul>
      </section>

      {/* Hình ảnh công ty */}
      <section className="companyWrapperImg mb-5">
        <h4 className="titleCompany">Hình ảnh công ty</h4>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="swiper-wrapper"
        >
          {companyImgSrc.map((item, index) => {
            return (
              <SwiperSlide className="companyImg" key={index}>
                <img src={item} alt={item} className="companyImgItem" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/*Info */}
      <section className="container text-center pb-5">
        <h4 className="titleCompany">Bạn đã sẵn sàng</h4>

        <p>
          <strong>
            Gửi CV hoặc liên hệ NGAY đến email: admin.hr@lpe.vn (Bộ phận Hành
            chính - Nhân sự)
          </strong>
        </p>
      </section>
    </div>
  );
}

export default Recruitment;
