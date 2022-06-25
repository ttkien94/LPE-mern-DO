import React from "react";
import TableCell from "@mui/material/TableCell";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";

function TableList({ view, dataItem, labelId, onOpenDrawer, onHandleDelete }) {
  const handleOpenDrawer = (item) => {
    onOpenDrawer && onOpenDrawer(item);
  };

  const handleDelete = (id) => {
    onHandleDelete && onHandleDelete(id);
  };

  return (
    <>
      {view === "user" && (
        <>
          <TableCell component="th" id={labelId} scope="row" padding="none">
            &nbsp; {dataItem._id}
          </TableCell>
          <TableCell component="th" id={labelId} scope="row" padding="none">
            <LPEAvatar avatar={dataItem.avatar} name={dataItem.name} />
          </TableCell>
          <TableCell align="left">{dataItem.email}</TableCell>
          <TableCell align="left">{dataItem.phone}</TableCell>

          <TableCell align="left">
            <div
              className={`${
                dataItem.role === "admin" ? "admin-style" : "client-style"
              } role-item`}
            >
              <p> {dataItem.role}</p>
            </div>
          </TableCell>

          <TableCell align="left">
            <Button
              variant="outlined"
              startIcon={<ModeEditOutlinedIcon />}
              onClick={() => {
                handleOpenDrawer(dataItem);
              }}
            >
              Chỉnh sửa
            </Button>

            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              className="ml-3"
              color="error"
              onClick={() => {
                handleDelete(dataItem._id);
              }}
            >
              Xóa
            </Button>
          </TableCell>
        </>
      )}
    </>
  );
}

export default TableList;
