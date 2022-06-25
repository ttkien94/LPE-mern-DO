import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import { pr } from "../../assets/images/chuong-trinh-huan-luyen/offline";

import "./styles/styles.scss";

function PR() {
  useSiteTitle("living_happy");

  return (
    <div className="pr mt-2">
      <div className="container-fluid p-0">
        <img src={pr.pr01} alt={pr.pr01} />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 offset-md-3 mt-3">
              <iframe
                height="315"
                src="https://www.youtube.com/embed/rY8T633Me80"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-8 offset-md-2 mt-3">
              <img src={pr.pr02} alt={pr.pr02} />
              <img src={pr.pr03} alt={pr.pr03} />
              <img src={pr.pr04} alt={pr.pr04} />
            </div>
          </div>

          <div className="row mt-3 flex-alignitem">
            <div className="col-md-7">
              <img src={pr.pr05} alt={pr.pr05} />
            </div>
            <div className="col-md-5">
              <p>
                Mỗi ngày trôi qua chúng ta đều phải tiếp xúc với người khác: gia
                đình, bạn bè, đồng nghiệp, sếp, nhân viên, hàng xóm, người bán
                hàng, … Và mọi vấn đề xảy ra đều bắt nguồn từ bất hoà trong các
                mối quan hệ này. Người mà chúng ta trò chuyện nhiều nhất là
                chính bản thân mình. Trước bất kỳ quyết định nào, chúng ta cũng
                suy nghĩ và tự hỏi bản thân mình nhiều điều. Đôi lúc, ta nghĩ
                bụng sẽ làm nhưng rồi lại không làm, ta trì hoãn, ta bắt đầu mà
                không hoàn thành, … Đó là lúc mối quan hệ với chính mình không
                hoà hợp.
              </p>
            </div>
          </div>
          <div className="row mt-3 flex-alignitem">
            <div className="col-md-6">
              <img src={pr.pr06} alt={pr.pr06} />
              <p className="problem">
                Hầu hết mọi người đều nghĩ phải cần có ít nhất HAI NGƯỜI để mối
                quan hệ trở nên tốt đẹp. Ai cũng mong chờ người kia thay đổi,
                người kia hiểu mình, người kia nên làm thế này/thế kia, …Mọi
                quyết định luôn đúng ngay tại thời điểm chúng ta đưa ra quyết
                định. Nhưng khi có vấn đề xảy ra thì chúng ta thường nhìn thấy
                lỗi từ người khác, vì những yếu tố tác động bên ngoài, …Chỉ vì
                tin điều này, nhiều cuộc hôn nhân đổ vỡ, kinh doanh thất bại,
                chiến tranh xảy ra,... Câu hỏi tất cả chúng ta đặt ra là làm thế
                nào để thiết lập những mối quan hệ bền vững và hoàn hảo. Chúng
                ta tìm kiếm câu trả lời bằng nhiều cách khác nhau: đọc sách,
                tham gia khoá học, tìm nhà tư vấn, … Nhưng đến bây giờ, các mối
                quan hệ của chúng ta ra sao? Đâu mới là câu trả lời thực sự?
              </p>
            </div>
            <div className="col-md-6">
              <img src={pr.pr07} alt={pr.pr07} />
            </div>
          </div>

          <div className="row">
            <div className="col-10 offset-1">
              <img src={pr.pr08} alt={pr.pr08} />
            </div>
          </div>

          <div className="row flex-alignitem">
            <div className="col-md-7">
              <strong>Mối quan hệ với bản thân:</strong> Hầu hết chúng ta đều
              chưa hiểu và chưa đối xử thật sự tử tế với chính bản thân mình.
              Chúng ta chưa chịu lắng nghe bản thân cần gì, có khả năng gì,
              chúng ta bỏ lơ bản thân, mải mê chạy theo thế giới bên ngoài.
              Chúng ta chưa chăm sóc tốt cho bản thân, chúng ta chỉ chú ý tới
              bản thân khi nó gặp phải những vấn đề sức khỏe, bệnh tật, tai nạn…
              Cơ thể phản ứng lại bằng những dấu hiệu tiêu cực về thể chất lẫn
              tinh thần.
            </div>
            <div className="col-md-5">
              <img src={pr.pr09} alt={pr.pr09} />
            </div>
          </div>

          <div className="row flex-alignitem">
            <div className="col-md-7 order-last">
              <strong>Mối quan hệ với người khác:</strong> Hàng ngày, chúng ta
              phải tương tác với nhiều mối quan hệ như gia đình, người yêu, bạn
              bè, đồng nghiệp, cộng đồng xung quanh,… và mỗi cá nhân lại có một
              tính cách, tư duy và quan điểm khác nhau, rất khó tránh khỏi những
              bốc đồng, xung đột, nếu không biết dung hòa, mối quan hệ sẽ trở
              nên nặng nề, thậm chí là đỗ vỡ. Mất đi những mối quan hệ tốt,
              chúng ta mất đi rất nhiều niềm vui và cơ hội trong cuộc đời.
            </div>
            <div className="col-md-5">
              <img src={pr.pr10} alt={pr.pr10} />
            </div>
          </div>

          <div className="row flex-alignitem">
            <div className="col-md-7">
              <strong>Mối quan hệ với mẹ Trái Đất:</strong> Con người là loài
              động vật tiến hóa nhất, là một phần của tự nhiên, giữ vai trò vô
              cùng quan trọng trong chuỗi cân bằng tự nhiên, nhưng con người lại
              có mối quan hệ hết sức tồi tệ với mẹ trái đất. Chúng ta là “thủ
              phạm” chính gây nên tình trạng ô nhiễm môi trường cho nền công
              nghiệp, tàn phá tự nhiên cho sự phát triển kinh tế. Mẹ trái đất
              đang phản ứng hết sức gay gắt bằng những thiên tai ngày càng thảm
              khốc.
            </div>
            <div className="col-md-5">
              <img src={pr.pr11} alt={pr.pr11} />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-10 offset-1 ">
              <img src={pr.pr12} alt={pr.pr12} />
              <img src={pr.pr13} alt={pr.pr13} className="hidden-sm-xs" />
              <img src={pr.pr14} alt={pr.pr14} className="visible-sm-xs" />
            </div>
          </div>

          <div className="row">
            <div className="col-10 offset-1">
              <img src={pr.pr15} alt={pr.pr15} />
              <img src={pr.pr16} alt={pr.pr16} />
            </div>
            <h3 className=" mt-3 mb-5 col-8 offset-2 quote">
              Đầu tư cho những mối quan hệ chính là đầu tư “SINH LỜI” nhiều
              nhất. Đừng chần chừ, hãy cho LPE cơ hội được giúp bạn sống hòa hợp
              và hạnh phúc hơn với cuộc đời !
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PR;
