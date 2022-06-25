import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CategoryIcon from "@mui/icons-material/Category";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AnimationIcon from "@mui/icons-material/Animation";

const drawerWidth = 240;

const menuMagager = [
  {
    text: "Quản lý người dùng",
    icon: <GroupIcon />,
    link: "/admin/quan-ly-nguoi-dung",
  },
  {
    text: "Quản lý Sản phẩm",
    icon: <ShoppingCartIcon />,
    link: "/admin/quan-ly-san-pham",
  },
  {
    text: "Quản lý Blog",
    icon: <AutoStoriesIcon />,
    link: "/admin/quan-ly-bai-viet",
  },
];

const menuAction = [
  {
    text: "Thêm người dùng",
    icon: <PersonAddAltIcon />,
    link: "/admin/them-nguoi-dung",
  },
  {
    text: "Thêm sản phẩm",
    icon: <CategoryIcon />,
    link: "/admin/them-san-pham",
  },
  {
    text: "Thêm bài viết",
    icon: <DynamicFeedIcon />,
    link: "/admin/them-bai-viet",
  },
];

const menuInvoice = [
  {
    text: "Hóa đơn Shop",
    icon: <ReceiptIcon />,
    link: "/admin/xem-hoa-don",
  },
  {
    text: "Hóa đơn khóa học",
    icon: <AnimationIcon />,
    link: "/admin/xem-hoa-don-khoa-hoc-dang-ky",
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function AdminDrawer({ isOpen, onHandleDrawerClose }) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    onHandleDrawerClose && onHandleDrawerClose();
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <div className="wrapper-menu-admin">
        <List>
          {menuMagager?.map((item, index) => (
            <NavLink
              to={item.link}
              exact
              activeClassName="menu-selected"
              key={index}
            >
              <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Divider />

        <List>
          {menuAction?.map((item, index) => (
            <NavLink
              to={item.link}
              exact
              activeClassName="menu-selected"
              key={index}
            >
              <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Divider />

        <List>
          {menuInvoice?.map((item, index) => (
            <NavLink
              to={item.link}
              exact
              activeClassName="menu-selected"
              key={index}
            >
              <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
