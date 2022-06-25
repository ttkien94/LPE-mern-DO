import axios from "axios";
import { API_ENDPOINT, UPLOAD_IMAGE_BLOG } from "./Api";

// tools.js
import Embed from "@editorjs/embed";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import SimpleImage from "@editorjs/simple-image";
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";

// import Warning from "@editorjs/warning";
// import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
// import Raw from "@editorjs/raw";
// import Marker from "@editorjs/marker";
// import CheckList from "@editorjs/checklist";
// import InlineCode from "@editorjs/inline-code";

export const EDITOR_TOOLS_BLOG = {
  list: {
    class: List,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    tunes: ["alignment"],
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ["alignment"],
  },
  alignment: {
    class: AlignmentTuneTool,
    config: {
      default: "left",
      blocks: {
        header: "center",
        list: "left",
      },
    },
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        facebook: true,
        instagram: true,
        imgur: true,
        pinterest: true,
      },
    },
  },
  image: {
    class: Image,
    config: {
      // Config Push Upload file image for Blog
      uploader: {
        async uploadByFile(file) {
          // your ajax request for uploading
          const formData = new FormData();
          formData.append("blog", file);
          return await axios({
            url: API_ENDPOINT + UPLOAD_IMAGE_BLOG,
            method: "POST",
            data: formData,
          })
            .then((res) => {
              // chèn hàm lưu url những file đã upload trong editor
              // gọi hàm từ util
              // localStorage.setItem("imageContent", );
              return {
                success: 1,
                file: {
                  url: `${process.env.REACT_APP_BACKEND_URL}/${res.data.url}`,
                  // any other image data you want to store, such as width, height, color, extension, etc
                },
              };
            })
            .catch((err) => {
              console.log("error", err);
            });
        },
      },
    },
  },

  quote: Quote,
  delimiter: Delimiter,
  simpleImage: SimpleImage,
  // raw: Raw,
  // marker: Marker,
  // checklist: CheckList,
  // inlineCode: InlineCode,
  // warning: Warning,
  // code: Code,
  // linkTool: LinkTool,
};
