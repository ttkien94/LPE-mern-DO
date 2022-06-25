import { useState, useEffect } from "react";
import { Drawer } from "@mui/material";

function LPEDrawer({ anchor, disableScrollLock, children, isOpen, onToggle }) {
  const [openDrawer, setOpenDrawer] = useState();

  useEffect(() => {
    setOpenDrawer(isOpen);
  }, [isOpen]);

  return (
    <Drawer
      anchor={anchor}
      open={openDrawer}
      onClose={() => {
        onToggle(anchor, false);
      }}
      disableScrollLock={disableScrollLock}
    >
      {children}
    </Drawer>
  );
}

export default LPEDrawer;
