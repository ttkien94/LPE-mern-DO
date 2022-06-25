import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import UploadImage from "app/modules/AdminModules/addUser/components/uploadImage";

const InputOutside = forwardRef((props, ref) => {
  const { errors, listTopic, data } = props;

  const [errorImage, setErrorImage] = useState("");
  const [cover, setCover] = useState("");
  const [file, setFile] = useState(null);
  const [valueForm, setValueForm] = useState({});

  React.useEffect(() => {
    if (data) {
      setValueForm({
        topic: data.topicId,
        title: data.title,
        spotlight: data.spotlight,
        blogStatus: data.blogStatus,
      });
      setCover(`${process.env.REACT_APP_BACKEND_URL}/${data.cover}`);
    } else {
      setValueForm({
        topic: listTopic[0]?._id,
        title: "",
        spotlight: false,
        blogStatus: true,
      });
    }
  }, [listTopic]);
  const changeImage = (e) => {
    setErrorImage("");

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      return setErrorImage("Chỉ hỗ trợ file hình ảnh");
    }

    if (file.size / 1024 / 1024 < 1) {
      if (file) {
        const createUrl = URL.createObjectURL(file);

        setCover(createUrl);
        setFile(file);
      }
    } else {
      setErrorImage("Chỉ hỗ trợ file ảnh tối đa 1MB");
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setCover(null);
  };

  const handleChangeForm = (e) => {
    const { value, name } = e.target;

    setValueForm({
      ...valueForm,
      [name]: value,
    });
  };

  const handleChangeCheckBox = (e) => {
    const { checked, name } = e.target;
    console.log(name, checked);
    setValueForm({
      ...valueForm,
      [name]: checked,
    });
  };

  useImperativeHandle(ref, () => ({
    getImage() {
      return file;
    },
    getValue() {
      return valueForm;
    },
  }));

  return (
    <form className="blog-outside" ref={ref}>
      {/* upload Image */}
      <label className="text-left mb-3">Cover bài viết</label>

      <div className="wrapperUpload-cover">
        <UploadImage
          image={cover}
          onChangeImage={changeImage}
          removeImage={handleRemoveImage}
          type="cover"
        />

        <p className="text-secondary text-center mt-3">
          Cho phép upload file ảnh *.jpeg, *.jpg, *.png với kích cỡ không quá
          1MB
        </p>

        {errorImage && <p className="text-danger">{errorImage}</p>}
      </div>

      {/* category */}
      <div className="topic-blog">
        <label htmlFor="topic">Chọn danh mục</label>

        <select
          name="topic"
          id="topic"
          onChange={handleChangeForm}
          value={valueForm.topic}
        >
          {listTopic?.map((option, index) => {
            return (
              <option value={option._id} key={index}>
                {option.name.toLowerCase()}
              </option>
            );
          })}
        </select>
      </div>

      <div className="button-animation">
        <span className="ios-toggle">
          <input
            type="checkbox"
            name="blogStatus"
            id="blogStatus"
            onChange={handleChangeCheckBox}
            checked={valueForm.blogStatus === true ? "checked" : ""}
          ></input>
          <label for="blogStatus">Hiển Thị</label>
        </span>
        <label for="blogStatus" className="ml-2">
          Hiển Thị
        </label>
      </div>
      <div className="button-animation ml-5">
        <span className="ios-toggle">
          <input
            type="checkbox"
            name="spotlight"
            id="spotlight"
            onChange={handleChangeCheckBox}
            checked={valueForm.spotlight === true ? "checked" : ""}
          ></input>
          <label for="spotlight">Ghim Bài</label>
        </span>
        <label for="spotlight" className="ml-2">
          Ghim Bài
        </label>
      </div>
      {/* title */}
      <div className="title-blog">
        <textarea
          name="title"
          placeholder="Tiêu đề bài viết"
          defaultValue={valueForm.title}
          onChange={handleChangeForm}
        />
      </div>

      {errors.length > 0 && <p className="text-danger">{errors}</p>}
    </form>
  );
});

export default InputOutside;
