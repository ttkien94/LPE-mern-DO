import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { pp } from "../../assets/images/chuong-trinh-huan-luyen/offline";

import "./styles/styles.scss";

function PP() {
  useSiteTitle("finding_porpose");

  const block01 = [
    {
      img: pp.pp03,
      text: "“Tôi không tài giỏi, tôi không thể làm điều gì lớn lao cả”",
    },
    {
      img: pp.pp04,
      text: "“Cuộc đời tôi là những mảng đen mù mịt, không biết đi về đâu”",
    },
    {
      img: pp.pp05,
      text: "“Tôi muốn kiếm nhiều tiền nhưng không biết làm như thế nào”",
    },
    {
      img: pp.pp06,
      text: "“Tôi sợ, sợ rủi ro, sợ thất bại nên cứ e ngại mà không dám bắt đầu”",
    },
    {
      img: pp.pp07,
      text: "“Tôi luôn bị vỡ kế hoạch bởi sự trì hoãn, cứ ngồi yên chờ thời cơ”",
    },
    {
      img: pp.pp08,
      text: "“Tôi không kiểm soát được mình, dễ bị cảm xúc tiêu cực chi phối”",
    },
  ];

  return (
    <div className="container-fluid pp">
      <div className="row">
        <img src={pp.pp01} alt={pp.pp01} className="img-fluid background-pp" />
      </div>

      <div
        className="row video flex-alignitem"
        style={{
          background: `url(${pp.backgroundpp01})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="col-12 col-md-6 mt-3">
          <img src={pp.pp02} alt={pp.pp02} className="col-sm-8 offset-sm-2" />
        </div>

        <div className="col-md-6 mt-3">
          <iframe
            height="315"
            src="https://www.youtube.com/embed/op_f1QsI9Qs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/*  */}
      <div
        className="row problem pt-5 pb-3"
        style={{
          background: `url(${pp.backgroundpp02})`,
          backgroundSize: "100% 100%",
        }}
      >
        <h2>
          HẦU HẾT CHÚNG TA <br />
          ĐỀU GẶP PHẢI CÁC VẤN ĐỀ
        </h2>

        {block01.map((block, index) => {
          return (
            <div className="col-sm-6 col-md-4 " key={index}>
              <img
                src={block.img}
                alt={block.img}
                className="col-10 offset-1"
              />
              <p>{block.text}</p>
            </div>
          );
        })}
      </div>

      <div className="row change flex-alignitem">
        <h2>
          NHỮNG THAY ĐỔI TÍCH CỰC CỦA HỌC VIÊN QUA <br />
          CHƯƠNG TRÌNH TÌM LẠI LẼ SỐNG VÀ KHÁT VỌNG THÀNH CÔNG
        </h2>
        <div className="col-md-6 mt-4">
          <h3>
            Thả tự do tâm trí khỏi mọi buồn đau <br />
            trong cuộc sống
          </h3>
          <h3>
            Chữa lành mọi sự trì hoãn <br /> trong bản than
          </h3>
          <h3>
            Chữa lành những tổn thương <br />
            in sâu trong quá khứ
          </h3>
          <h3>
            Hiểu và vận dụng thuần thục <br /> sức mạnh tâm trí
          </h3>
          <h3>
            Đánh thức tài năng thực sự <br />
            ẩn giấu bên trong bạn
          </h3>
          <h3>
            Biết được ý nghĩa và giá trị <br />
            thực sự của Đam Mê
          </h3>
        </div>
        <div className="col-md-6">
          <iframe
            height="315"
            src="https://www.youtube.com/embed/Mk6O59KH7TU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-10 offset-md-1">
          <img src={pp.pp09} alt={pp.pp09} />
        </div>
      </div>

      <div className="row trainer flex-alignitem">
        <h2 className="col-md-10 offset-md-1">
          Người đồng hành giúp bạn <br />
          tìm lại lẽ sống và khát vọng thành công
        </h2>

        <div className="col-md-6 mt-3">
          <img src={pp.pp10} alt={pp.pp10} />
        </div>

        <div className="col-md-6 mt-3 ">
          <h3 className="text-center">Vasanth Gopalance</h3>
          <p className="text-center">
            <i>Creator + Fournder of LPE & Life Uni </i>
          </p>
          <p>
            Chairman của Leading Performance Group tại Singapore, Malaysia,
            Vietnam, Thailand, Mandiver, Srilanka.
          </p>
          <p>
            30 năm kinh nghiệm đào tạo khi phục vụ cho lực lượng vũ trang
            Singapore ở vai trò Sĩ Quan Tham Mưu
          </p>
          <p>
            18 năm là Master Trainer, huấn luyện NLP và các ngành Khoa học Tâm
            trí tại nhiều quốc gia trên thế giới với các chứng nhận uy tín từ
            Mỹ, Châu Âu.
          </p>
        </div>

        <div className="col-md-6 mt-3">
          <h3 className="text-center">Mrs. La Hạ Giang Thanh</h3>
          <p className="text-center">
            <i>
              Managing Director
              <br />
              NLP Master Trainer
              <br />
              Advanced Generative Trance Coach
              <br />
              Time Line Therapist <br />
              Hypnotherapist
            </i>
          </p>
          <p>
            Người tiên phong trong việc tạo nền tảng ngôn ngữ, thuật ngữ cho
            ngành NLP bằng tiếng Việt.
          </p>
          <p>
            Nhà Tư Vấn Trị Liệu đã chữa lành và chuyển hoá thành công hàng trăm
            khách hàng đủ mọi lứa tuổi và ngành nghề.
          </p>
          <p>
            Giám đốc Điều hành 9x trẻ tuổi và tài năng, dẫn dắt đội ngũ nhân
            viên trở thành con người tuyệt vời nhất của chính họ và từng bước
            khẳng định vị thế của ngành khoa học tư duy NLP tại Việt Nam.
          </p>
        </div>
        <div className="col-md-6 mt-3 ">
          <img src={pp.pp11} alt={pp.pp11} className="mx-auto" />
        </div>
      </div>

      <div
        className="row benefit"
        style={{
          background: `url(${pp.backgroundpp03})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="col-md-10 offset-md-1">
          <img src={pp.pp12} alt={pp.pp12} className="col-md-10 offset-md-1" />

          <div className="row text-center">
            <div className="col-md-4 offset-md-0 col-sm-8 offset-sm-2 mt-3">
              <img src={pp.pp13} alt={pp.pp13} className="img-fluid w-100" />

              <img src={pp.pp14} alt={pp.pp14} className="img-fluid mt-3" />
            </div>

            <div className="col-md-4 offset-md-0 col-sm-8 offset-sm-2  mt-3">
              <img src={pp.pp15} alt={pp.pp15} />

              <img src={pp.pp16} alt={pp.pp16} className="img-fluid mt-3 " />
            </div>
            <div className="col-md-4 offset-md-0 col-sm-8 offset-sm-2 mt-3">
              <img src={pp.pp17} alt={pp.pp17} />

              <img src={pp.pp18} alt={pp.pp18} className="img-fluid mt-3 " />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-8 offset-2">
              <img
                src={pp.pp19}
                alt={pp.pp19}
                style={{ backgroundColor: "white" }}
              />
              <img src={pp.pp20} alt={pp.pp20} />
              <img src={pp.pp21} alt={pp.pp21} />
              <img src={pp.pp22} alt={pp.pp22} />
              <img src={pp.pp23} alt={pp.pp23} className="mt-3" />

              <div className="row">
                <div className="col-6">
                  <img src={pp.pp24} alt={pp.pp24} />
                </div>
                <div className="col-6">
                  <img src={pp.pp25} alt={pp.pp25} />
                </div>
              </div>
              <img src={pp.pp26} alt={pp.pp26} className="mt-3" />
              <div className="row">
                <div className="col-6">
                  <img src={pp.pp27} alt={pp.pp27} />
                </div>
                <div className="col-6">
                  <img src={pp.pp28} alt={pp.pp28} />
                </div>
                <div className="col-6">
                  <img src={pp.pp29} alt={pp.pp29} />
                </div>
                <div className="col-6">
                  <img src={pp.pp30} alt={pp.pp30} />
                </div>
              </div>
              <img
                src={pp.pp31}
                alt={pp.pp31}
                className="mt-3 col-6 offset-3 mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PP;
