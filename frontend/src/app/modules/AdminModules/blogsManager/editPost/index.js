import React, { useEffect, useRef, useState } from "react";
import LPEEditor from "app/components/editor";
import LPEModal from "app/components/modal";
import { EDITOR_TOOLS_BLOG } from "app/const/tools";
import InputOutside from "../components/outsideBlog";
import PreviewBlog from "../components/preview";
import { getQueryVariable } from "app/components/getQueryVariable";
import { useDispatch, useSelector } from "react-redux";
import { getBlogId } from "core/redux/actions/blogAction";
import LPELoading from "app/components/loading";
import axiosClient from "app/const/Instance";
import { API_ENDPOINT, TOPIC } from "app/const/Api";
import { convertBlocksToHtml } from "core/utils/editorUtil";
import { convertStringToSlug } from "core/utils/convertToSlug";
import {
  updateBlogAction,
  postBlogAction,
} from "core/redux/actions/blogAction";
function EditPost() {
  // const [id, setID] = useState(getQueryVariable("_id"));
  const { blog } = useSelector((state) => state.blog);
  const [isLoading, setIsLoading] = useState(true);
  const [listTopic, setListTopic] = useState([]);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState({ blocks: [] });
  const [rawToHtml, setRawToHtml] = useState([]);
  const refEditor = useRef(null);
  const refModal = useRef(null);
  const refOutside = useRef(null);
  // const [blog, setBlog] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (blog) {
      let data = JSON.parse(blog[0].content);
      setContent({ blocks: data });
    }
  }, [blog]);

  // get BlogDetails by ID
  useEffect(() => {
    dispatch(getBlogId(getQueryVariable("_id")));
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    axiosClient
      .get(TOPIC)
      .then((response) => {
        setListTopic(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleEdit = async () => {
    console.log("handleEdit run");
    setErrors("");
    setIsLoadingPost(true);

    const val = await refEditor.current.getBlocks();
    // const html = convertBlocksToHtml(val.blocks);
    const value = refOutside.current.getValue();
    var cover = refOutside.current.getImage();
    if (!cover) {
      cover = blog[0].cover;
    }
    console.log(cover);
    if (!val.blocks.length) {
      setIsLoadingPost(false);
      setErrors("Bài viết chưa có nội dung.");
      return;
    }

    if (!value.title || value.title.length < 0) {
      setIsLoadingPost(false);

      setErrors("Tiêu đề bài viết chưa có.");
      return;
    }

    const stringToSlug = convertStringToSlug(value.title);
    const blocks = JSON.stringify(val.blocks);
    const generate = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 10);

    const formData = new FormData();
    console.log("cover:", cover);
    const dataSubmit = {
      _id: getQueryVariable("_id"),
      topicId: value.topic,
      title: value.title,
      blogStatus: value.blogStatus,
      spotlight: value.spotlight,
      content: blocks,
      url: stringToSlug + "-" + generate,
      cover: cover,
    };

    for (let props in dataSubmit) {
      formData.append(props, dataSubmit[props]);
    }

    dispatch(updateBlogAction(formData, setIsLoadingPost));
    setIsLoadingPost(false);
  };

  // Preview Button handler
  const handlePreview = async () => {
    const val = await refEditor.current.getBlocks();
    const html = convertBlocksToHtml(val.blocks);

    setRawToHtml(html);

    refModal.current.handleOpen();
  };

  // const data = JSON.parse(blog);
  return (
    <>
      {!!listTopic.length && (
        <>
          <div className="addblog-screen">
            <div className="row ">
              <InputOutside
                ref={refOutside}
                errors={errors}
                listTopic={listTopic}
                data={blog[0]}
              />
              <div className="col-12 mt-4">
                <LPEEditor
                  onHandleSubmit={handleEdit}
                  onPreview={handlePreview}
                  ref={refEditor}
                  tools={EDITOR_TOOLS_BLOG}
                  placeholder="Nhập nội dung bài viết "
                  defaultValue={content}
                />
              </div>

              <div className="fixed-layout">
                <button
                  className="btn-addblog btn-addblog-preview"
                  onClick={handlePreview}
                >
                  Preview
                </button>

                <button
                  className="btn-addblog btn-addblog-post"
                  onClick={handleEdit}
                  disabled={isLoadingPost}
                >
                  Xác nhận
                </button>
              </div>
            </div>
            <LPEModal ref={refModal} width={900} height="80vh">
              <PreviewBlog render={rawToHtml} />
            </LPEModal>
          </div>
        </>
      )}
    </>
  );
}

export default EditPost;
