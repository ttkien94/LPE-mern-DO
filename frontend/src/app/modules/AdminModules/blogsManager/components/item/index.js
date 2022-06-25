import React from "react";
import { Link } from "react-router-dom";
import { deleteBlogAction } from "core/redux/actions/blogAction";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import {
  updateBlogSpotLight,
  updateBlogStatus,
} from "core/redux/actions/blogAction";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./styles/styles.scss";

function BlogItem({ item }) {
  const dispatch = useDispatch();
  const submitDelete = () => {
    confirmAlert({
      title: "Xóa Bài Viết",
      message: "Bạn có muốn xóa bài viết?",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteBlogAction(item)),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <Card sx={{ maxHeight: 756 }}>
      <CardMedia
        component="img"
        height="200"
        alt={process.env.REACT_APP_BACKEND_URL + `/${item.cover}`}
        image={process.env.REACT_APP_BACKEND_URL + `/${item.cover}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="blog-title"
        >
          {item.title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" color="secondary">
          <Link to={`/admin/sua-bai?_id=${item._id}`} className="text-white">
            Edit
          </Link>
        </Button>

        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => {
            submitDelete();
          }}
        >
          Delete
        </Button>

        {item.spotlight === true ? (
          <>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(updateBlogSpotLight(item._id, false));
              }}
            >
              UnSpotLight
            </Button>
          </>
        ) : (
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(updateBlogSpotLight(item._id, true));
            }}
          >
            SpotLight
          </Button>
        )}
        {item.blogStatus === false ? (
          <>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                dispatch(updateBlogStatus(item._id, true));
              }}
            >
              View
            </Button>
          </>
        ) : (
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(updateBlogStatus(item._id, false));
            }}
          >
            Hidden
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default BlogItem;
