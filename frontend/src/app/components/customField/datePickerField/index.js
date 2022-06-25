import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { timeToUnix } from "core/utils/dateUtil";

function DatePickerField(props) {
  const { field, label, placeholder, disabled, className, form } = props;

  const handleChangeDate = (value) => {
    const changeEvent = {
      target: {
        name: field.name,
        value: +timeToUnix(value),
      },
    };

    field.onChange(changeEvent);
  };

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        onChange={handleChangeDate}
        error={showError}
        helperText={errors[name]}
        format="dd-MMM-yyyy"
        views={["year", "month", "day"]}
        openTo="year"
        renderInput={(params) => (
          <TextField
            {...params}
            error={showError}
            helperText={showError && errors[name]}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

DatePickerField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  className: "",
};

export default DatePickerField;
