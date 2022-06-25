import { toast } from "react-toastify";

export const showToast = (type, content, { position, timeout }) => {
  const opts = {
    position: position || "top-right",
    autoClose: timeout || 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    icon: false,
  };

  switch (type) {
    case "success":
      return toast.success(
        <div className="wrapper-toast">
          <i className="far fa-check-circle mr-"></i>
          {content}
        </div>,
        opts
      );

    case "error":
      return toast.error(
        <div className="wrapper-toast">
          <i className="fas fa-times"></i>
          {content}
        </div>,
        opts
      );
    case "warning":
      return toast.warn(
        <div className="wrapper-toast">
          <i className="fas fa-exclamation"></i>
          {content}
        </div>,
        opts
      );
    default:
      return toast("🦄 Default is this!", opts);
  }
};
