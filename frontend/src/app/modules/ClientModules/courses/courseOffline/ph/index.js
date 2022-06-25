import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { ph } from "../../assets/images/chuong-trinh-huan-luyen/offline";
import "./styles/styles.scss";

function PH() {
  useSiteTitle("perfect_health");

  return (
    <div className="container-fluid ph">
      <div className="">
        <div className="row">
          <img src={ph.ph01} alt={ph.ph01} className="img-fluid w-100" />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcr3oTosQ_Hp_3cgpPciN4JB7NDiXzdjoPc4f8lcgm1_jjVw/viewform">
            <img src={ph.ph02} alt={ph.ph02} className="col-6 offset-3" />
          </a>
          <img src={ph.ph03} alt={ph.ph03} className="col-8 offset-2" />
          <img
            src={ph.ph04}
            alt={ph.ph04}
            className="col-10 offset-1 hidden-sm-xs"
          />

          <img
            src={ph.ph05}
            alt={ph.ph05}
            className="col-8 offset-2 visible-sm-xs"
          />
        </div>

        <div className="row mt-3 ">
          <div className="col-md-10 offset-md-1">
            <div className="row flex-alignitem">
              <div className="col-md-3">
                <img src={ph.ph06} alt={ph.ph06} />
              </div>
              <div className="col-md-6">
                <div className="boxgreen">
                  <p>
                    Khi bị sốt, chúng ta thường đổ lỗi cho thời tiết, nhưng thực
                    tế cùng một điều kiện thời tiết như vậy, chỉ có mình bị sốt,
                    còn nhiều người khác vẫn khỏe mạnh.
                  </p>
                  <p>
                    Chúng ta đều biết giao thông tiềm ẩn những nguy cơ tai nạn
                    nguy hiểm, nhưng thực tế ai cũng phải tham gia giao thông,
                    đột nhiên một ngày chúng ta vừa có suy nghĩ tiêu cực thì tai
                    nạn liền ập tới.
                  </p>
                  <p>
                    Vết thương luôn khiến chúng ta đau đớn, đặc biệt những lúc
                    chúng ta nghĩ đến nó, còn những lúc bận rộn không nghĩ đến
                    nó thì dường như quên mất đau đớn...
                  </p>
                  <p>
                    Thực tế, hoàn cảnh bên ngoài không phải nguyên nhân khiến
                    bạn bị tổn thương, mà nguyên nhân sâu xa nằm ở chính bản
                    thân của mỗi chúng ta.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <img src={ph.ph07} alt={ph.ph07} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 flex-alignitem">
          <div className="col-md-6">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/C5WXpsLcmZM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="boxgreen">
              <p>
                Câu chuyện về sức mạnh chữa lành kỳ diệu của niềm tin, giúp cho
                những người đang mắc bệnh hiểm nghèo, thậm chí là ung thư có thể
                sống gần như khỏe mạnh không còn là kỳ tích nữa, đó là điều đã
                được khoa học chứng minh.
              </p>
              <p>
                Nghiên cứu của giáo sư Mary Gilhooly thuộc Đại học Paisley ở
                Scotland trên 126.000 cá nhân cho thấy, những người luôn lạc
                quan và tin tưởng vào cuộc sống bao giờ cũng trơ lỳ hơn với
                stress và đối đầu có hiệu quả hơn với nỗi sợ hãi. Họ luôn hạnh
                phúc với cuộc sống và không bao giờ cảm thấy cô độc. Họ ít bị
                phiền toái vì chứng cao huyết áp, ít bị mắc bệnh tim mạch và có
                khả năng chống lại sự hình thành và phát triển của tế bào ung
                thư.
              </p>
              <p>
                Vận dụng sức mạnh của niềm tin vào việc duy trì sức khỏe toàn
                diện là một trong những nội dung của chương trình.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-10 offset-md-1">
            <img src={ph.ph08} alt={ph.ph08} />
          </div>
          <img src={ph.ph09} alt={ph.ph09} className="hidden-sm-xs" />

          <img src={ph.ph10} alt={ph.ph10} className="visible-sm-xs " />
        </div>

        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <img src={ph.ph11} alt={ph.ph11} />
          </div>
          <div className="col-8 offset-2">
            <div className="row">
              <div className="col-md-6">
                <img src={ph.ph12} alt={ph.ph12} />
                <div className="contentObject">
                  <h3>TỪ 15 TUỔI TRỞ LÊN</h3>
                  <p>
                    Những người đã hoàn thiện về mặt thể chất để thực hiện những
                    liệu pháp cải thiện sức khỏe.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={ph.ph13} alt={ph.ph13} />
                <div className="contentObject">
                  <h3>VẤN ĐỀ SỨC KHỎE</h3>
                  <p>
                    Từ những người hay bệnh vặt đến những người đang chống chọi
                    với các căn bệnh hiểm nghèo.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={ph.ph14} alt={ph.ph14} />
                <div className="contentObject">
                  <h3>HAY BỊ STRESS, TRẦM CẢM</h3>
                  <p>
                    Tâm lý luôn trong trạng thái bất ổn, lo lắng, sợ hãi dẫn đến
                    stress, trầm cảm, từ đó ảnh hưởng sức khỏe.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={ph.ph15} alt={ph.ph15} />
                <div className="contentObject">
                  <h3>LỐI SỐNG THIẾU KHOA HỌC</h3>
                  <p>
                    Lối sống sinh hoạt, ăn uống, ngủ nghỉ không khoa học, khiến
                    cho cơ thể luôn mệt mỏi và dễ bệnh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 offset-md-2">
            <img src={ph.ph16} alt={ph.ph16} />
          </div>
        </div>

        <div className="row mt-3 pb-3">
          <div className="col-10 offset-1">
            <div className="row flex-alignitem">
              <div className="col-md-6">
                <img src={ph.ph17} alt={ph.ph17} />
                <div className="boxgreen text-center">
                  <h3>NGƯỜI ĐỒNG HÀNH CÙNG BẠN:</h3>
                  <hr />
                  <h3>NLP Master Trainer. Vasanth Gopalan</h3>
                  <p>
                    Chairman của Leading Performance Group tại Singapore,
                    Malaysia, Vietnam, Thailand, Mandiver, Srilanka
                  </p>
                  <p>
                    30 năm kinh nghiệm đào tạo khi phục vụ cho Lực lượng vũ
                    trang Singapore ở vai trò Sĩ Quan Tham Mưu
                  </p>
                  <p>
                    17 năm làm NLP Master Trainer tại nhiều quốc gia trên thế
                    giới với các chứng nhận uy tín từ Mỹ, Châu Âu
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={ph.ph18} alt={ph.ph18} />
                <img src={ph.ph19} alt={ph.ph19} />
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdcr3oTosQ_Hp_3cgpPciN4JB7NDiXzdjoPc4f8lcgm1_jjVw/viewform"
                  className="register "
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PH;
