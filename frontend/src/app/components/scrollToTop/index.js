import { Fab, useScrollTrigger, Zoom } from "@mui/material";

import "./styles/styles.scss";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className="buttonTopPosition"
      >
        {children}
      </div>
    </Zoom>
  );
}

function ScrollTopButton(props) {
  return (
    <ScrollTop {...props}>
      <Fab
        size="medium"
        aria-label="scroll back to top"
        className="buttonColor"
      >
        <i className="fal fa-chevron-up"></i>
      </Fab>
    </ScrollTop>
  );
}

export default ScrollTopButton;
