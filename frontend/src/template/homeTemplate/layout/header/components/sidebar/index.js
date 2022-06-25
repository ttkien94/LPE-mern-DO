import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { styled } from "@mui/styles";
import { useTranslation } from "react-i18next";

import LPEAvatar from "app/components/avatar";
import LoginButton from "app/components/loginButton";

// Material UI component
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// Styles CSS
import NextButton from "assets/images/nextButton.png";

import { isEmpty } from "core/utils/isEmpty";
import { logOutAction } from "core/redux/actions/authAction";

import "./styles/styles.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "none",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<i className="fal fa-chevron-right"></i>}
    {...props}
  />
))(({ theme }) => ({
  marginBottom: -1,
  minHeight: 56,
  color: "red",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

function SidebarHeader({ onToggle, menuContent }) {
  const { t } = useTranslation("common");
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMenu = (data) => {
    return (
      <ul>
        {data?.map((child, index) => {
          return (
            <Accordion
              key={index}
              style={{
                border: "none",
                boxShadow: "transparent",
                padding: 0,
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  backgroundColor: "#fff",
                  margin: 0,
                  paddingLeft: "36px",
                }}
                className="summary-acordion"
                expandIcon={
                  child.childMenu && <i className="fal fa-chevron-down"></i>
                }
              >
                <Link
                  to={child.url}
                  onClick={onToggle("right", false)}
                  className="sidebar_link"
                >
                  {t(child.title).toLocaleUpperCase()}
                </Link>
              </AccordionSummary>

              {child.childMenu && (
                <AccordionDetails>
                  {handleMenu(child.childMenu)}
                </AccordionDetails>
              )}
            </Accordion>
          );
        })}
      </ul>
    );
  };

  const logOut = () => {
    dispatch(logOutAction(history));
  };

  return (
    <div className="sideMenu">
      <div>
        <div className="menuLogin">
          {!isEmpty(userInfo) ? (
            <Link to="/thong-tin-tai-khoan/ho-so" className="titleUrl">
              <LPEAvatar
                name={userInfo?.name}
                avatar={userInfo?.avatar}
                action={onToggle("right", false)}
              />
            </Link>
          ) : (
            <LoginButton sidebar onClose={onToggle("right", false)} />
          )}

          <img
            src={NextButton}
            alt={NextButton}
            className="imgNext"
            onClick={onToggle("right", false)}
            style={{
              width: "18px",
              height: "18px",
            }}
          />
        </div>

        {userInfo.role === "admin" && (
          <>
            <Link to="/admin" className="logOut">
              <p className="titleUrl">Quản trị</p>
            </Link>
            {/* <div className="logOut">
              <p className="titleUrl">Quản trị</p>
            </div> */}
          </>
        )}

        <ul className="menuSide">
          {menuContent?.map((ele, index) => {
            return (
              <Accordion
                key={index}
                style={{
                  border: "none",
                  boxShadow: "transparent",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{
                    backgroundColor: "#fff",
                  }}
                  expandIcon={
                    ele.childMenu && <i className="fal fa-chevron-down"></i>
                  }
                >
                  <Link
                    to={ele.url}
                    className="titleUrl"
                    onClick={onToggle("right", false)}
                  >
                    {t(ele.title).toLocaleUpperCase()}
                  </Link>
                </AccordionSummary>

                {ele.childMenu && (
                  <AccordionDetails>
                    {handleMenu(ele.childMenu)}
                  </AccordionDetails>
                )}
              </Accordion>
            );
          })}
        </ul>

        {!isEmpty(userInfo) && (
          <>
            <div
              className="logOut"
              onClick={() => {
                logOut();
              }}
            >
              <p className="titleUrl">Đăng xuất</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SidebarHeader;
