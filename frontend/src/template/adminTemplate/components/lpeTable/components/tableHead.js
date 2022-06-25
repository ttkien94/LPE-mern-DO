import * as React from "react";
import PropTypes from "prop-types";
import { TableCell, TableHead, TableRow } from "@mui/material";

export default function LPETableHead({ tableHead }) {
  return (
    <TableHead>
      <TableRow>
        {tableHead.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

LPETableHead.propTypes = {
  tableHead: PropTypes.array.isRequired,
};
