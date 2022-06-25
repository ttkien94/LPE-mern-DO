import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import LPEButton from "app/components/button";
import TextInput from "app/components/textInput";

import { makeStyles } from "@mui/styles";
import { changePasswordAction } from "core/redux/actions/authAction";

const useStyles = makeStyles((theme) => ({
  registerBtn: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#3777bc",
    color: "#fff",
    textTransform: "capitalize",
    width: "100%",
    padding: "10px 0px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#448ad5",
    },
  },
}));

function ChangePassword({ id }) {
  const classes = useStyles();
  const refForm = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const handleChangePassword = (e) => {
    e && e.preventDefault();
    const errors = {};
    setErrors({});
    setIsLoading(true);

    const { new_password, re_new_password, old_password } = refForm.current;

    for (let index = 0; index < refForm.current.length; index++) {
      const { value, name, type } = refForm.current[index];
      if (type === "password" && value.trim().length < 6) {
        errors[name] = "Độ dài tối thiểu là 6 ký tự";
      }
    }

    if (Object.keys(errors).length) {
      setIsLoading(false);
      return setErrors(errors);
    }

    const data = {
      id,
      newPassword: new_password.value,
      oldPassword: old_password.value,
    };

    if (re_new_password.value === new_password.value) {
      handleSubmit(data);
    } else {
      re_new_password.focus();
      setErrors({ ...errors, re_new_password: "Mật khẩu không trùng khớp" });
      setIsLoading(false);
    }
  };

  const handleSubmit = (data) => {
    // handle changepasword
    dispatch(changePasswordAction(data, setIsLoading, setErrors));
  };

  return (
    <div className="profileBox">
      <form ref={refForm}>
        <div className="row">
          <div className="col-12 col-md-6">
            <TextInput
              label="Mật khẩu cũ"
              placeHolder="Nhập mật khẩu cũ"
              type="password"
              name="old_password"
              error={errors.old_password}
              typeInput="text"
            />
          </div>
          <div className="col-12 col-md-6">
            <TextInput
              label="Mật khẩu mới"
              placeHolder="Nhập mật khẩu mới"
              type="password"
              name="new_password"
              error={errors.new_password}
              typeInput="text"
            />
          </div>

          <div className="col-12 col-md-6">
            <TextInput
              label="Nhập lại mật khẩu mới"
              placeHolder="Nhập lại mật khẩu mới"
              type="password"
              name="re_new_password"
              error={errors.re_new_password}
              typeInput="text"
            />
          </div>
        </div>
      </form>

      <div className="row p-0">
        <div className="col-12 col-md-6">
          <LPEButton
            action={handleChangePassword}
            name="Cập nhật mật khẩu"
            loading={isLoading}
            classStyled={classes.registerBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
