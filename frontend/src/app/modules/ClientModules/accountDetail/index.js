import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LPEAvatar from "app/components/avatar";
import { useParams, useHistory } from "react-router-dom";
import AccountInfo from "./screen/AccountInfo";

import ChangePassword from "./screen/changePassword";
import MemberVip from "./screen/memberVip";

import { logOutAction } from "core/redux/actions/authAction";

import withAuth from "core/hooks/useAuth";

import "./styles/styles.scss";

function AccountDetail() {
  useSiteTitle("account_detail");
  let { screen } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuTab = [
    {
      href: `/thong-tin-tai-khoan/khu-vuc-hoc-tap/`,
      name: "Khu vực học tập",
      icon: <i className="fab fa-discourse mr-3"></i>,
      screen: "khu-vuc-hoc-tap",
    },
    {
      href: `/thong-tin-tai-khoan/thanh-vien-vip/`,
      name: "Thành viên VIP",
      icon: <i className="far fa-gem text-warning mr-3"></i>,
      screen: "thanh-vien-vip",
    },
    {
      href: `/thong-tin-tai-khoan/doi-mat-khau`,
      name: "Đổi mật khẩu",
      icon: <i className="fas fa-lock mr-3"></i>,
      screen: "doi-mat-khau",
    },
    {
      href: `/thong-tin-tai-khoan/chi-tiet-don-hang/`,
      name: "Chi tiết đơn hàng",
      icon: <i className="fab fa-buffer mr-3"></i>,
      screen: "chi-tiet-don-hang",
    },
    {
      href: `/thong-tin-tai-khoan/nhan-ho-tro/`,
      name: "Nhận hỗ trợ",
      icon: <i className="fas fa-headphones-alt mr-3"></i>,
      screen: "nhan-ho-tro",
    },
  ];

  const handleLogOut = () => {
    dispatch(logOutAction(history));
  };
  return (
    <div className="bg-color-wh">
      <main className="container  py-3">
        {/* Button collapse menu when screen on mobile */}

        <div className="row mt-5">
          {/* Table */}
          <div className="col-4 d-none d-lg-block">
            <div className="menuBox">
              <Link to="/thong-tin-tai-khoan/ho-so" className="infoUser">
                {/* avatar */}
                {!!userInfo && (
                  <LPEAvatar
                    name={userInfo?.name}
                    avatar={userInfo?.avatar}
                    className="avatar"
                    hiddenName
                  />
                )}

                <div className="wrapperName">
                  {/* Tên */}
                  <p>{userInfo.name}</p>

                  {/* chức vụ */}
                  <p>
                    {userInfo.role === "client" ? "Người dùng" : "Admin"} tại
                    LPE
                  </p>
                </div>
              </Link>

              <ul className="menuList">
                {menuTab.map((item, index) => {
                  return (
                    <li
                      className={
                        screen !== item.screen ? "menuItem" : "menuItemActive"
                      }
                      key={index}
                      // onClick={() => {
                      //   handleTab(item);
                      // }}
                    >
                      <Link to={item.href}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </li>
                  );
                })}

                <li onClick={handleLogOut} className="logout">
                  <i className="fas fa-sign-out-alt mr-3"></i>
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>

          {/* Info */}
          <div className="col-12 col-lg-8">
            {screen === "ho-so" && (
              <>
                <div className="heading">
                  <h3>Thông tin cá nhân</h3>

                  <p>
                    Cập nhật chính xác thông tin của bạn để hoạt động tốt hơn
                    trên LPE
                  </p>
                </div>

                <AccountInfo userInfo={userInfo} id={userInfo?._id} />
              </>
            )}

            {screen === "khu-vuc-hoc-tap" && (
              <>
                <div className="heading">
                  <h3>Khu vực học tập</h3>

                  <p>Khóa học mà bạn đăng ký sẽ được hiển thị dưới đây</p>

                  <p>Đang phát triển</p>
                </div>
              </>
            )}

            {screen === "thanh-vien-vip" && (
              <>
                <div className="heading">
                  <h3>Thành viên VIP</h3>

                  <p>
                    Ưu đãi và lợi ích của thành viên VIP sẽ hiển thị dưới đây
                  </p>
                </div>

                <MemberVip userInfo={userInfo} id={userInfo?._id} />
              </>
            )}

            {screen === "doi-mat-khau" && (
              <>
                <div className="heading">
                  <h3>Đổi mật khẩu</h3>

                  <p>Đổi mật khẩu cho tài khoản của bạn</p>
                </div>

                <ChangePassword userInfo={userInfo} id={userInfo?._id} />
              </>
            )}

            {screen === "chi-tiet-don-hang" && (
              <>
                <div className="heading">
                  <h3>Chi tiết đơn hàng</h3>

                  <p>Chi tiết và lịch sử những đơn hàng của bạn</p>

                  <p>Đang phát triển</p>
                </div>
              </>
            )}

            {screen === "nhan-ho-tro" && (
              <>
                <div className="heading">
                  <h3>Nhận hỗ trợ</h3>

                  <p>
                    LPE chúng tôi nhận hỗ trợ các vấn đề cho bạn trong giờ hành
                    chính. nhưng chúng tôi vẫn hỗ trợ các vấn đề quan trọng
                    ngoài giờ làm việc
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default withAuth(AccountDetail);
