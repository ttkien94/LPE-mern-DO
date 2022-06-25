import { forwardRef, useImperativeHandle, useState } from "react";
import { Popover } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "0",
  },
  wrapperPopover: {
    padding: 0,
  },
  ".MuiAppBar-colorPrimary": {
    padding: "0!important",
    color: "unset!important",
    fontStyle: "Roboto",
  },
}));

const LPEPopover = forwardRef(({ anchor, transfrom, content }, ref) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useImperativeHandle(ref, () => ({
    handleClick(event) {
      setAnchorEl(event.currentTarget);
    },
    handleCloseClick() {
      handleClose();
    },
  }));

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={anchor}
      transformOrigin={transfrom}
      className={classes.wrapperPopover}
    >
      <div className={classes.content}>{content}</div>
    </Popover>
  );
});

export default LPEPopover;
