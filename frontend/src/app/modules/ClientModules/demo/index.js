import axiosClient from "app/const/Instance";
import React, { useEffect, useState } from "react";
import Filter from "./components/filter";
import ListTable from "./components/list";
import Pagination from "./components/pagination";
import { stringify } from "query-string";

function Demo() {
  const LIMIT = 5;
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFilter, setDataFilter] = useState({});

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
      .get(`users/testing-api?${stringify(data)}`)
      .then((response) => {
        setIsLoading(false);

        isFiltered
          ? setTotal(response.total || 0)
          : setTotal(response.total || 0);
        console.log(response.data);
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

  return (
    <>
      <div className="container py-5">
        <Filter filterList={handleFilter} />

        {isLoading ? <div>dang tai</div> : <ListTable list={list} />}

        <Pagination
          itemPerPage={LIMIT}
          totalItem={total}
          onChange={onChangePage}
          isFiltered={isFiltered}
        />
      </div>
    </>
  );
}

export default Demo;
