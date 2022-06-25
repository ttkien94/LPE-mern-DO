import React from "react";
import PropTypes from "prop-types";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function CheckBoxField(props) {
  const { className, disabled, label, checked, onHandleCheckbox } = props;

  return (
    <FormGroup className={className}>
      <FormControlLabel
        control={<Checkbox defaultChecked={checked} />}
        label={label}
        disabled={disabled}
        onClick={onHandleCheckbox}
      />
    </FormGroup>
  );
}

CheckBoxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onHandleCheckbox: PropTypes.func,
};

CheckBoxField.defaultProps = {
  label: "",
  disabled: false,
  className: "",
  checked: false,
};

export default CheckBoxField;
