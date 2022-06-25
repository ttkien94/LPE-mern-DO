import React, { memo } from "react";
import { TableRow, TableBody, TableCell } from "@mui/material";

import TableList from "./tableList";

function LPETableBody({
  view,
  dataTable,
  onHandleClick,
  onHandleEdit,
  onOpenDrawer,
  onHandleDelete,
}) {
  return (
    <TableBody>
      {dataTable?.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableList
              view={view}
              onHandleClick={onHandleClick}
              onHandleEdit={onHandleEdit}
              onOpenDrawer={onOpenDrawer}
              onHandleDelete={onHandleDelete}
              dataItem={item}
            />
          </TableRow>
        );
      })}

      {dataTable.length === 0 && (
        <TableRow
          style={{
            height: 70,
          }}
        >
          <TableCell>
            <p className="text-center">Danh sách rỗng</p>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}

export default memo(LPETableBody);
