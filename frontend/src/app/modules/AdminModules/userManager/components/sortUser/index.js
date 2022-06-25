import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { isEmpty } from "core/utils/isEmpty";

function SortUser({ defaultValue, onChangeSort }) {
  const [sortValue, setSortValue] = React.useState({});

  React.useEffect(() => {
    if (!isEmpty(defaultValue)) {
      setSortValue(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSortValue({ ...sortValue, [name]: value });

    onChangeSort && onChangeSort(e);
  };

  return (
    <form>
      <div>
        <FormControl>
          <FormLabel component="legend">Giới tính</FormLabel>

          <RadioGroup
            name="gender"
            onChange={handleChange}
            value={sortValue?.gender || ""}
          >
            <FormControlLabel value="nam" control={<Radio />} label="Nam" />
            <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <FormControl>
          <FormLabel component="legend">Phân quyền</FormLabel>

          <RadioGroup
            name="role"
            onChange={handleChange}
            value={sortValue?.role || ""}
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
    </form>
  );
}

export default SortUser;
