import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import LPEEditor from "app/components/editor";
import LPEModal from "app/components/modal";

import PreviewBlog from "../components/preview";
import InputOutside from "../components/outsideBlog";

import { convertBlocksToHtml } from "core/utils/editorUtil";
import { convertStringToSlug } from "core/utils/convertToSlug";

import { EDITOR_TOOLS_BLOG } from "app/const/tools";
import { postBlogAction } from "core/redux/actions/blogAction";

import "./styles/index.scss";
import axiosClient from "app/const/Instance";
import { API_ENDPOINT, TOPIC } from "app/const/Api";

function AddPost() {
  const dispatch = useDispatch();
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [rawToHtml, setRawToHtml] = useState([]);
  const [errors, setErrors] = useState([]);
  const [listTopic, setListTopic] = useState([]);
  // const [imagesContent, setImagesContent] = useState();
  const refEditor = useRef(null);
  const refModal = useRef(null);
  const refOutside = useRef(null);
  // const instanceRef = useRef(null);
  // Fetch Topic
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

  const handlePostBlog = async () => {
    setErrors("");
    setIsLoadingPost(true);

    const val = await refEditor.current.getBlocks();
    // const html = convertBlocksToHtml(val.blocks);
    const value = refOutside.current.getValue();
    const cover = refOutside.current.getImage();

    if (!cover) {
      setIsLoadingPost(false);

      setErrors("Cover bài viết chưa đúng hoặc chưa tồn tại.");
      return;
    }

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

    const dataSubmit = {
      topicId: value.topic,
      title: value.title,
      blogStatus: value.blogStatus,
      spotlight: value.spotlight,
      content: blocks,
      url: stringToSlug + "-" + generate,
      blog: cover,
    };

    for (let props in dataSubmit) {
      formData.append(props, dataSubmit[props]);
    }

    dispatch(postBlogAction(formData, setIsLoadingPost));
    setIsLoadingPost(false);
  };

  // Preview Button handler
  const handlePreview = async () => {
    const val = await refEditor.current.getBlocks();
    const html = convertBlocksToHtml(val.blocks);

    setRawToHtml(html);

    refModal.current.handleOpen();
  };

  return (
    <>
      {!!listTopic.length && (
        <div className="addblog-screen">
          <div className="row ">
            <InputOutside
              ref={refOutside}
              errors={errors}
              listTopic={listTopic}
            />

            <div className="col-12 mt-4">
              <LPEEditor
                onHandleSubmit={handlePostBlog}
                // instanceRef={(instance) => (instanceRef.current = instance)}
                onPreview={handlePreview}
                ref={refEditor}
                tools={EDITOR_TOOLS_BLOG}
                placeholder="Nhập nội dung bài viết"
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
                onClick={handlePostBlog}
                disabled={isLoadingPost}
              >
                Đăng bài
              </button>
            </div>
          </div>

          <LPEModal ref={refModal} width={900} height="80vh">
            <PreviewBlog render={rawToHtml} />
          </LPEModal>
        </div>
      )}
    </>
  );
}

export default AddPost;
