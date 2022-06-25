import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Link } from "react-router-dom";
import { ltc } from "../../assets/images/chuong-trinh-huan-luyen/offline";

import "./styles/styles.scss";

function LTC() {
  useSiteTitle("LTC_program");
  return (
    <div className="container-fluid ltc text-center">
      <div>
        <div className="row flex-alignitem">
          <img src={ltc.ltc01} alt={ltc.ltc01} className="img-fluid w-100" />
          <div className="col-md-6 offset-md-3 mt-3">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/ia0u8QaKDO8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-10 offset-md-1">
            <p>
              Chường trình huấn luyện đặc biệt Trại Huấn Luyện Lãnh Đạo (LTC -
              Leaedership Training Camp) do NLP Master Trainer hàng đầu châu Á -
              Mr. Vasanth Gopalan và Mrs. La Hạ Giang Thanh thiết kế và trực
              tiếp đào đạo.
            </p>
            <div className="row">
              <div className="col-md-6 mt-3">
                <img src={ltc.ltc02} alt={ltc.ltc02} />
                <Link to="/lpe/mr-vas">
                  Xem thêm thông tin của NLP Master Trainer Vasanth Gopalan
                </Link>
              </div>
              <div className="col-md-6 mt-3">
                <img src={ltc.ltc03} alt={ltc.ltc03} />
                <Link to="/lpe/ms-la-ha-giang-thanh">
                  Xem thêm thông tin của NLP Master Trainer La Hạ Giang Thanh
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 ">
          <h3 className="ltc-title col-md-8 offset-md-2">
            TẠI SAO PHẢI THAM GIA CHƯƠNG TRÌNH NÀY?
          </h3>

          <div className="col-md-10 offset-md-1 mt-3 text-justify">
            <div className="row flex-alignitem ">
              <div className="col-md-6">
                <ul>
                  <li>Hiểu rõ bản chất của hai chữ "LÃNH ĐẠO"</li>
                  <li>
                    Có động lực mạnh mẽ từ việc hiểu sức mạnh của hoạt động đội
                    nhóm
                  </li>
                  <li>
                    Nắm vững những kiến thức chuyên sâu về Nghệ Thuật Lãnh Đạo
                    Cơ Bản & Xây dựng đội nhóm
                  </li>
                  <li>
                    Biết Cách gắn kết các thành viên, tìm ra điểm mạnh của từng
                    người để thiết lập đội nhóm hoàn hảo cho dự án
                  </li>
                  <li>
                    Thay đổi & chuyển hóa bản thân ngay sau khi được huấn luyện
                    cường độ cao
                  </li>
                </ul>
              </div>
              <div className="col-md-6 ">
                <img src={ltc.ltc04} alt={ltc.ltc04} />
              </div>
            </div>

            <div className="row flex-alignitem mt-3 ">
              <div className="col-md-6 order-last">
                <ul>
                  <li>Hiểu rõ bản chất của hai chữ "LÃNH ĐẠO"</li>
                  <li>
                    Có động lực mạnh mẽ từ việc hiểu sức mạnh của hoạt động đội
                    nhóm
                  </li>
                  <li>
                    Nắm vững những kiến thức chuyên sâu về Nghệ Thuật Lãnh Đạo
                    Cơ Bản & Xây dựng đội nhóm
                  </li>
                  <li>
                    Biết Cách gắn kết các thành viên, tìm ra điểm mạnh của từng
                    người để thiết lập đội nhóm hoàn hảo cho dự án
                  </li>
                  <li>
                    Thay đổi & chuyển hóa bản thân ngay sau khi được huấn luyện
                    cường độ cao
                  </li>
                </ul>
              </div>
              <div className="col-md-6 ">
                <img src={ltc.ltc05} alt={ltc.ltc05} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <h3 className="ltc-title col-md-8 offset-md-2">
            LỢI ÍCH CỦA CHƯƠNG TRÌNH ĐÀO TẠO CÓ MỘT KHÔNG HAI TRÊN THẾ GIỚI
          </h3>

          <img
            src={ltc.ltc06}
            alt={ltc.ltc06}
            className=" col-md-10 offset-md-1"
          />
          <div className="mt-3 col-md-8 offset-md-2">
            <div className="boxBrown">
              <p>Chiến lược vượt qua Thách Thức bản thân</p>
              <p>Kỹ năng xử lý áp lực và căng thẳng thường ngày</p>
              <p>
                Áp dụng NLP vào việc xử lý tình huống, ra quyết định và giải
                quyết vấn đề
              </p>
              <p>
                Tự tin với kỹ năng truyền tải thông điệp của mình đến mọi người
              </p>
              <p>Thành thạo kỹ năng thuyết trình trước đám đông</p>
              <p>Hiểu rõ quy tắc vàng để nuôi dạy con trẻ</p>
              <p>
                Nắm bắt một cách nhanh chóng biểu hiện của người bị nạn và thành
                thạo kỹ năng sơ cấp cứu kịp thời & hiệu quả
              </p>
              <p>Kỹ năng COACHING TỐC ĐỘ</p>
              <p>Nhận được bằng chứng nhận từ Chuyên Gia</p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <h3 className="ltc-title col-md-8 offset-md-2">ĐỐI TƯỢNG THAM GIA</h3>
          <div className="col-md-10 offset-md-1 text-justify">
            <div className="row flex-alignitem mt-3">
              <div className="col-md-6 order-last">
                <ul>
                  <li>Từ 18 đến 65 tuổi</li>
                  <li>
                    Những người mong muốn khai phá con người lãnh đạo sẵn có bên
                    trong mỗi người
                  </li>
                  <li>Những ai mong muốn trở thành một lãnh đạo xuất chúng</li>
                  <li>
                    Những ai đề cao việc ứng dụng kiến thức đã học vào thực tế
                  </li>
                  <li>
                    Những ai khao khát học hỏi và mong muốn được thử thách bản
                    thân - bứt phá mọi giới hạn và rào cản.
                  </li>
                </ul>
              </div>
              <div className="col-md-6 ">
                <img src={ltc.ltc07} alt={ltc.ltc07} />
              </div>
            </div>
            <div className="row mt-5 text-center">
              <div className="special">
                <img
                  src={ltc.ltc08c}
                  alt={ltc.ltc08c}
                  className="specialTitle"
                />
                <p>QUYỀN LỢI THAM GIA ĐỘI NGŨ HỖ TRỢ CỦA LIFE UNIVERSITY</p>
                <p>
                  Có cơ hội tham gia vào đội ngũ Hỗ Trợ theo cấp độ chương trình
                  thuộc Chuỗi Đại Học Cuộc Đời do Coach Vas đào tạo.
                </p>
                <p>
                  Nhiều quyền lợi ưu đãi về các khóa học khi đạt yêu cầu về thời
                  lượng tham gia Hỗ Trợ.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 pb-4">
          <div className="col-md-10 offset-md-1">
            <h3 className="ltc-title col-md-8 offset-md-2">
              ENGLISH DESCRIPTION
            </h3>
            <div className="boxBrown text-left">
              <h3>LEADERSHIP TRAINING CAMP</h3>
              <p>
                The special training program LTC - Leadership Training Camp is
                designed and directly trained by top NLP Master Trainer - Mr.
                Vasanth Gopalan and Mrs. La Ha Giang Thanh.
              </p>
              <p>
                View for more information about NLP Master Trainer Vasanth
                Gopalan
              </p>
              <p>
                View for more information about NLP Master Trainer La Ha Giang
                Thanh
              </p>
              <h3>Why have to attend this course?</h3>
              <ul>
                <li>Understand deeply the nature of the words "LEADERSHIP",</li>
                <li>
                  Generate strong motivation thanks to understanding the power
                  of team working,
                </li>
                <li>
                  Master the specialist knowledge about the art of basic
                  leadership & building team,
                </li>
                <li>
                  Know how to connect with another members, find out the
                  strength of each otherto contribute a perfect team for the
                  project,
                </li>
                <li>
                  Change & transfer yourself immediately after being trained
                  with high intensity,
                </li>
                <li>
                  Apply strategies & processes into your life and motivate work
                  to be successful,
                </li>
                <li>
                  Experience as a leader. From then acquire lessons from
                  yourself and others,
                </li>
                <li>
                  Master the method to make detail and perfect plan from
                  preparation period to the end,
                </li>
                <li>Train students inspiring art,</li>
                <li>
                  Have opportunities to connect with business partners having
                  the mindset you are looking for.
                </li>
              </ul>
              <h3>Benefits of the very unique experience in the world:</h3>
              <ul>
                <li>Strategies to overcome challenges,</li>
                <li>Skills to deal with stress everyday,</li>
                <li>Skills to deal with stress everyday,</li>
                <li>
                  Apply NLP in handle the situation, make decision and solve
                  problems,
                </li>
                <li>Confident to convey message to others,</li>
                <li>Proficient in speak in public,</li>
                <li>Understand the golden rule in parenting,</li>
                <li>
                  Grasp the victim’s expression quickly and master the emergency
                  skills promptly & effectively,
                </li>
                <li>SPEED COACHING skill,</li>
                <li>Receive certification from professor</li>
              </ul>
              <h3>Audience:</h3>
              <ul>
                <li>From 18 to 65 years old,</li>
                <li>
                  People who want to explore the leader already inside them,
                </li>
                <li>People who want to be an outstanding leader,</li>
                <li>People who want to apply knowledge in life,</li>
                <li>
                  People who are hungry for knowledge and want to challenge
                  themselves - break throuhg every limitation and obtacles.
                </li>
              </ul>
              <h3>**BENEFIT: Join Support Team in Life University.</h3>
              <ul>
                <li>
                  Have an opportunity to join Support Team at programs in Life
                  University trained by Coach Vas.
                </li>
                <li>
                  Many benefits related to courses when meets requirements about
                  the amount of time joining Support team.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LTC;
