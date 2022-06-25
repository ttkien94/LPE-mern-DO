import React from "react";

function ItemTable({ item }) {
  return (
    <tr>
      <th scope="row">{item.createdAt}</th>
      <th>{item.name}</th>
      <th>{item.gender}</th>
      <th>{item.email}</th>
      <th>{item.phone}</th>
    </tr>
  );
}

export default ItemTable;
