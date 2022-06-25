import React, { useState } from "react";
import Search from "./search";
import Sort from "./sort";

function Filter({ filterList }) {
  const [keyword, setKeyword] = useState("");
  const [sortValue, setSortValue] = useState({});

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    filterList({
      keyword,
      gender: sortValue.gender,
      role: sortValue.role,
    });
  };

  const handleSort = (data) => {
    setSortValue(data);
    filterList({ keyword, gender: data.gender, role: data.role });
  };

  return (
    <div className="d-flex justify-content-between">
      <Search handleSearch={handleSearch} keyword={keyword} />

      <Sort handleSort={handleSort} />
    </div>
  );
}

export default Filter;
