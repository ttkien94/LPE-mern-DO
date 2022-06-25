import React, { useRef, useState } from "react";
import "./styles/styles.scss";

function Accordion({ title, description }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const refHeight = useRef(null);

  function handleOpen() {
    setOpen(!open);

    if (refHeight.current !== null) {
      setHeight(open ? "0px" : `${refHeight.current.scrollHeight}px`);
    }
  }

  return (
    <>
      <div className={`${open && "active"} accordion`}>
        <div
          className="accordion-title"
          onClick={() => {
            handleOpen();
          }}
        >
          <p className="accordion-title_primary">{title}</p>
        </div>
      </div>
      <div
        className="accordion-content"
        ref={refHeight}
        style={{
          maxHeight: `${height}`,
        }}
      >
        <p className="accordion-content_primary">{description}</p>
      </div>
    </>
  );
}

export default Accordion;
