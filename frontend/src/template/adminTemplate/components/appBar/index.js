import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// @mui
import { Toolbar, IconButton, Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

// Component
import LPEAvatar from "app/components/avatar";
import LPEPopover from "app/components/popover";

// Action
import { logOutAction } from "core/redux/actions/authAction";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: "#fff",
  color: "#333",
}));

const useStyles = makeStyles(() => ({
  btnPopOver: {
    padding: "10px 20px!important",
    fontWeight: "bold!important",
    color: "#333!important",
    width: "100%",
    "&:hover": {
      color: "#fff!important",
      backgroundColor: "black!important",
    },
  },
}));

function Appbar({ onHandleDrawerOpen, isOpen }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const anchor = { vertical: "bottom", horizontal: "right" };
  const transfrom = { vertical: "top", horizontal: "right" };
  const { userInfo } = useSelector((state) => state.auth);
  const refLogin = useRef();

  const handleDrawerOpen = () => {
    onHandleDrawerOpen && onHandleDrawerOpen();
  };

  const logOut = () => {
    dispatch(logOutAction(history));
  };

  const PopOverContent = () => {
    return (
      <div className="popOver">
        <Link to="/thong-tin-tai-khoan/ho-so">
          <Button
            className={classes.btnPopOver}
            onClick={() => {
              refLogin.current.handleCloseClick();
            }}
          >
            Thông tin tài khoản
          </Button>
        </Link>

        <Link to="/">
          <Button className={classes.btnPopOver}>Trở về trang chủ</Button>
        </Link>

        <Button
          className={classes.btnPopOver}
          onClick={() => {
            logOut();
          }}
        >
          Đăng xuất
        </Button>
      </div>
    );
  };

  return (
    <AppBar position="fixed" open={isOpen}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {userInfo && (
          <LPEAvatar
            name={userInfo?.name}
            avatar={userInfo?.avatar}
            action={(e) => {
              refLogin.current.handleClick(e);
            }}
          />
        )}
      </Toolbar>

      <LPEPopover
        ref={refLogin}
        anchor={anchor}
        transfrom={transfrom}
        content={<PopOverContent />}
      />
    </AppBar>
  );
}

export default Appbar;
