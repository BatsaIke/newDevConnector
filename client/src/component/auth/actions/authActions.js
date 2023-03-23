import axios from "axios";
import { setAlert } from "./alert.js";
import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTH_ERROR,
  USER_LOADED,
  CLEAR_PROFILE,
} from "./types.js";
import setAuthToken from "../utils/setAuthToken.js";

//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/v1/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("/api/v1/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(setAlert("Registration succesfull", "success", 3000));
      dispatch(loadUser());
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", 3000))
        );
      }
      dispatch({
        type: REGISTER_FAILED,
      });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/v1/auth", body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(setAlert("login succesfull", "success", 3000));
      dispatch(loadUser());
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", 3000))
        );
      }
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

//logout /clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
