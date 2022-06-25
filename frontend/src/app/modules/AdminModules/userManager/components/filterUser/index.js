import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

import SortUser from "../sortUser";
import { isEmpty } from "core/utils/isEmpty";

function FilterUser({ filterList, onClosePopOver, dataFilter }) {
  const [filter, setFilter] = useState({});

  React.useEffect(() => {
    if (!isEmpty(dataFilter)) {
      setFilter(dataFilter);
    }
  }, [dataFilter]);

  const handleClosePopOver = () => {
    onClosePopOver && onClosePopOver();
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setFilter({ ...filter, keyword: value });
  };

  const handleChangeSort = (e) => {
    const { value, name } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = () => {
    // Nếu keyword khác empty và sortValue khác empty thì thực hiện
    if (!isEmpty(filter) || !filter?.keyword.length) {
      filterList(filter);
      handleClosePopOver();
    } else {
      setFilter({});
    }
  };

  const handleClear = () => {
    if (!isEmpty(filter)) {
      filterList({});
      handleClosePopOver();
    } else {
      handleClosePopOver();
      return;
    }
  };

  return (
    <div className="filter-panel">
      <TextField
        label="Tìm theo tên/email"
        margin="normal"
        onChange={handleChange}
        value={filter.keyword || ""}
      />

      <SortUser onChangeSort={handleChangeSort} defaultValue={filter} />

      <div
        style={{
          display: "block",
        }}
      >
        <Button
          variant="contained"
          className="mr-1"
          color="primary"
          onClick={handleSubmit}
        >
          Lưu
        </Button>

        <Button onClick={handleClear}>Hủy bỏ</Button>
      </div>
    </div>
  );
}

export default FilterUser;
