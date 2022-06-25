import React, { memo } from "react";
import { Box, Table, TableContainer, Paper } from "@mui/material";

import LPETableHead from "./components/tableHead";
import LPETableBody from "./components/tableBody";

function LPETable({
  tableHead,
  tableData,
  view,
  onOpenDrawer,
  onHandleDelete,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <LPETableHead rowCount={tableData.length} tableHead={tableHead} />

            <LPETableBody
              dataTable={tableData}
              view={view}
              onOpenDrawer={onOpenDrawer}
              onHandleDelete={onHandleDelete}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default memo(LPETable);
