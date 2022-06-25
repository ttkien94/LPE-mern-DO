import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

function InputField(props) {
  const {
    field,
    type,
    label,
    placeholder,
    disabled,
    className,
    typePassword,
    form,
  } = props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {type === "text" && (
        <TextField
          placeholder={placeholder}
          variant="outlined"
          label={label}
          type="text"
          disabled={disabled}
          className={className}
          error={showError}
          helperText={showError && errors[name]}
          autoComplete="off"
          aria-autocomplete="none"
          spellCheck={false}
          // field of Formik have 4 important props
          {...field}
        />
      )}

      {type === "password" && (
        <div>
          <TextField
            placeholder={placeholder}
            variant="outlined"
            label={label}
            type={showPassword ? "text" : "password"}
            disabled={disabled}
            className={`${className}`}
            error={showError}
            helperText={showError && errors[name]}
            autoComplete="off"
            aria-autocomplete="none"
            spellCheck={false}
            // field of Formik have 4 important props
            {...field}
            InputProps={
              typePassword === "icon" && {
                endAdornment: (
                  <div
                    onClick={handleTogglePassword}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? (
                      <i className="fal fa-eye-slash"></i>
                    ) : (
                      <i className="far fa-eye"></i>
                    )}
                  </div>
                ),
              }
            }
          />

          {typePassword === "checkbox" && (
            <FormGroup className="w-100 mb-4">
              <FormControlLabel
                control={<Checkbox />}
                label="Hiện mật khẩu"
                onChange={handleChange}
              />
            </FormGroup>
          )}
        </div>
      )}
    </>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  typePassword: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
  typePassword: "icon",
};

export default InputField;
