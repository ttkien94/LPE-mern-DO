import React, { useEffect, useRef, useState } from "react";
import axiosClient from "app/const/Instance.js";
import { stringify } from "query-string";
import { Button } from "@mui/material";
import EditUser from "./components/editUser/index.js.js";
import FilterUser from "./components/filterUser/index.js";

import LPETable from "template/adminTemplate/components/lpeTable";
import LPEPopover from "app/components/popover/index.js";
import LPEDrawer from "app/components/drawer/index.js";
import LPEPagination from "app/components/pagination";
import LPELoadingSkeleton from "app/components/loadingSkeleton";

import "./styles/styles.scss";
import { showToast } from "core/utils/toastUtil.js";

const headCells = [
  { id: "id", label: "ID" },
  { id: "name", label: "Tên" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Số điện thoại" },
  { id: "role", label: "Quyền" },
  { id: "action", label: "Thao tác" },
];

const anchor = { vertical: "bottom", horizontal: "right" };
const transfrom = { vertical: "top", horizontal: "right" };

function UserManager() {
  const LIMIT = 10;

  const refFilter = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFilter, setDataFilter] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpenDrawer = (itemEditing) => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    getList(1);
  }, []);

  // Fetch Table Data
  const getList = (page, opts, isFiltered) => {
    setIsLoading(true);

    const skip = page === 0 ? 0 : (page - 1) * LIMIT;

    const data = {
      limit: LIMIT,
      skip,
      total: true,
      ...opts,
    };

    axiosClient
      .get(`users?${stringify(data)}`)
      .then((response) => {
        setIsLoading(false);

        isFiltered
          ? setTotal(response.total || 0)
          : setTotal(response.total || 0);

        setList(response.data);

        setTotal(response.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangePage = (page) => {
    getList(page, dataFilter);
  };

  const handleFilter = (data) => {
    setIsFiltered(true);
    getList(1, data, true);
    setDataFilter(data);
  };

  const handleDelete = (user_id) => {
    axiosClient
      .delete(`users/${user_id}`)
      .then((response) => {
        setList((list) => list.filter((item) => item._id !== user_id));
        setTotal((total) => total - 1);

        showToast("success", "Xóa người dùng thành công", {
          timeout: 5000,
        });
      })
      .catch((error) => {
        console.log(error);

        showToast("error", "Xóa người dùng thất bại", {
          timeout: 5000,
        });
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Button
          onClick={(e) => {
            refFilter.current.handleClick(e);
          }}
          variant="contained"
          className="mb-3"
        >
          Lọc
        </Button>

        {isLoading ? (
          <LPELoadingSkeleton count={LIMIT + 1} />
        ) : (
          <LPETable
            tableName={"Quản lý user"}
            tableHead={headCells}
            tableData={list}
            view="user"
            onOpenDrawer={handleOpenDrawer}
            onHandleDelete={handleDelete}
          />
        )}

        {/* Pagination */}
        <LPEPagination
          itemPerPage={LIMIT}
          totalItem={total}
          onChange={onChangePage}
          isFiltered={isFiltered}
        />
      </div>

      {/* Popover filter here */}
      <LPEPopover
        ref={refFilter}
        anchor={anchor}
        transfrom={transfrom}
        content={
          <FilterUser
            onClosePopOver={(e) => {
              refFilter.current.handleCloseClick(e);
            }}
            handleSort={handleFilter}
            filterList={handleFilter}
            valueFilter={dataFilter}
            dataFilter={dataFilter}
          />
        }
      />

      {/* Drawer edit screen here */}

      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <EditUser
          onToggleDrawer={toggleDrawer}
          // userEdit={userEdit}
        />
      </LPEDrawer>
    </>
  );
}

export default UserManager;
