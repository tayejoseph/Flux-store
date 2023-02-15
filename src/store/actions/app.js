import axios from "../../lib/axios";
import { notify } from "react-notify-toast";

import handleError from "../../lib/handleError";
import TYPES from "../type";

const altDataPlans = (data) => ({
  type: TYPES.ALT_DATA_PLAN,
  data,
});

export const validateAccNo = async (data) => {
  return await axios.post("/users/verify/account/", data);
};

export const fetchDataPlan = async (dispatch) => {
  try {
    const { status, data: response } = await axios.get(
      "/others/v2/data_plans/"
    );

    if (status === 200) {
      dispatch(altDataPlans(response.message.details));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const handleDataTopUp = async (data) => {
  try {
    const { data: response } = await axios.post("/others/v2/data/", data);
    if (response.error) {
      notify.show(response.message, "error");
    }
  } catch ({ response }) {}
};

export const handleAirTimeTopUp = async (data) => {
  try {
    const { data: response } = await axios.post("/others/v2/airtime/", data);

    if (response.error) {
      notify.show(response.message, "error");
    }
    return response;
  } catch ({ response }) {
    handleError(response);
  }
};
