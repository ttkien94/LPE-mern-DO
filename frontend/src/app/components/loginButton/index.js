import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import defaultPicAva from "assets/images/btnLogin.png";

import "./styles/styles.scss";

function LoginButton({ sidebar, onClose }) {
  const { t } = useTranslation("common");

  return (
    <Link to="/dang-nhap" onClick={onClose}>
      <div className={sidebar ? "imgLinkSide" : "imgLink"}>
        <img src={defaultPicAva} alt={defaultPicAva} className="imgBorder" />

        <span
          style={{
            marginLeft: sidebar ? "10px" : "5px",
            fontSize: sidebar ? "16px" : "14px",
            color: "#000",
          }}
          className="loginText"
        >
          {t("login")}
        </span>
      </div>
    </Link>
  );
}

export default LoginButton;
