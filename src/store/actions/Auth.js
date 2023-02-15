import axios from "../../lib/axios";
import Cookies from "js-cookie";
import handleError from "../../lib/handleError";
import TYPES from "../type";
import { initUserData } from "./user";

export const loginHandler = (data) => ({
  type: TYPES.LOGIN_USER,
  data,
});

export const logoutUser = () => ({
  type: TYPES.LOGOUT_USER,
});

export const loginUser = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post("/auth/login/", data);
    if (status === 200) {
      Cookies.set("token", response.token);
      dispatch(initUserData(response.user));
      if (response.user.full_name) dispatch(loginHandler(true));
    }
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};

export const signUpUser =
  ({ email, password: password1 }) =>
  async (dispatch) => {
    try {
      const { status, data: response } = await axios.post("/auth/register/", {
        email,
        password1,
      });
      if (status === 201) {
        Cookies.set("token", response.token);
        dispatch(initUserData(response.user));
      }
      return { status, response };
    } catch ({ response }) {
      handleError(response);
    }
  };

export const logOut = () => async (dispatch) => {
  dispatch(logoutUser());
};
