import axios from "axios";
import { setAlert } from "./alert.js";
import { GET_POST, POST_ERROR } from "./types.js";

//get posts
export const getPost = () => async (dispatch) => {
  try {
    const res = await axios.post("api/v1/posts");
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
