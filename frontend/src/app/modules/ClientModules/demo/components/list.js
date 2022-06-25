import React from "react";
import ItemTable from "./item";

function ListTable({ list }) {
  return (
    <div>
      <table className="table table-striped table-inverse table-responsive">
        {/* Table Head */}
        <thead className="thead-inverse">
          <tr>
            <th>Ngày tạo</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {list?.length &&
            list?.map((item, index) => <ItemTable item={item} key={index} />)}
        </tbody>
      </table>
    </div>
  );
}

export default ListTable;
