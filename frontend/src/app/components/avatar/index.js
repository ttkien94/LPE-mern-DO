import { Avatar } from "@mui/material";
import React from "react";

function LPEAvatar({ name, avatar, action, hiddenName }) {
  const openPopOver = (e) => {
    action && action(e);
  };

  const styles = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "10px",
  };

  // Make random color for avatar letter
  // function stringToColor(string) {
  //   let hash = 0;
  //   let i;

  //   /* eslint-disable no-bitwise */
  //   for (i = 0; i < string.length; i += 1) {
  //     hash = string.charCodeAt(i) + ((hash << 5) - hash);
  //   }

  //   let color = "#";

  //   for (i = 0; i < 3; i += 1) {
  //     const value = (hash >> (i * 8)) & 0xff;
  //     color += `00${value.toString(16)}`.substr(-2);
  //   }
  //   /* eslint-enable no-bitwise */

  //   return color;
  // }

  // /**
  //  *
  //  * @param {*} name
  //  * @returns 2 characters of name
  //  */
  // function stringAvatar(name) {
  //   return {
  //     sx: {
  //       bgcolor: stringToColor(name),
  //     },
  //     children:
  //       name.split(" ") > 1
  //         ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  //         : `${name.split(" ")[0][0]}`,
  //   };
  // }

  const ImageAvatar = () => {
    return (
      <div style={styles}>
        <Avatar alt={name} src={avatar} />

        {!hiddenName && <span className="ml-1">{name}</span>}
      </div>
    );
  };

  const LetterAvatar = () => {
    return (
      <div style={styles}>
        <Avatar />
        {!hiddenName && <span className="ml-1">{name}</span>}
      </div>
    );
  };
  return (
    <>
      {
        <div
          onClick={(e) => {
            openPopOver(e);
          }}
        >
          {avatar ? <ImageAvatar /> : <LetterAvatar />}
        </div>
      }
    </>
  );
}

export default LPEAvatar;
