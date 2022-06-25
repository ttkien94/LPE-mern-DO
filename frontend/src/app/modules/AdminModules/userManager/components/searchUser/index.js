import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

function SearchUser({ handleSearch, keyword }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form>
      <TextField
        label="Tìm theo tên/email"
        margin="normal"
        className="w-50"
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchUser;
