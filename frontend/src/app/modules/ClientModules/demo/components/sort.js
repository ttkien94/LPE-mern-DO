import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function Sort({ handleSort }) {
  const [sortValue, setSortValue] = useState({
    role: "",
    gender: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "gender") {
      setSortValue({ ...sortValue, gender: value });
    }

    if (name === "role") {
      setSortValue({ ...sortValue, role: value });
    }
  };

  const handleCancelSort = () => {
    setSortValue({ role: "", gender: "" });
    handleSort({ role: "", gender: "" });
  };

  const handleClick = () => {
    handleSort && handleSort(sortValue);
  };
  return (
    <form
      style={{
        padding: "15px 20px",
      }}
    >
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Giới tính</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={sortValue.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="nam" control={<Radio />} label="Nam" />
            <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Phân quyền</FormLabel>

          <RadioGroup
            aria-label="role"
            name="role"
            value={sortValue.role}
            onChange={handleChange}
          >
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            <FormControlLabel
              value="client"
              control={<Radio />}
              label="Client"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div
        style={{
          display: "block",
        }}
      >
        <Button
          variant="contained"
          style={{
            marginRight: "10px",
          }}
          onClick={handleClick}
        >
          Lưu
        </Button>
        <Button variant="text" onClick={handleCancelSort}>
          Hủy bỏ
        </Button>
      </div>
    </form>
  );
}

export default Sort;
