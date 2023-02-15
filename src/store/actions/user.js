import axios from "../../lib/axios";
import { notify } from "react-notify-toast";
import handleError from "../../lib/handleError";
import TYPES from "../type";

const altTransactionLists = (data) => ({
  type: TYPES.ALT_TRANSACTION_LISTS,
  data,
});

const altPersonalBankInfo = (data) => ({
  type: TYPES.ALT_PERSONALBANK_INFO,
  data,
});

export const initUserData = (data) => ({
  type: TYPES.USER_DATA,
  data,
});

export const altNotification = (data) => ({
  type: TYPES.ALT_NOTIFICATION,
  data,
});

export const altVirtualCardLists = (data) => ({
  type: TYPES.ALT_VIRTUAL_CARDS_LISTS,
  data,
});

export const altCatalog = (data) => ({
  type: TYPES.ALT_CATELOG,
  data,
});

export const altGiftLists = (data) => ({
  type: TYPES.ALT_GIFT_LISTS,
  data,
});

export const altRequestLists = (data) => ({
  type: TYPES.ALT_REQUEST_LISTS,
  data,
});

export const altCardLists = (data) => ({
  type: TYPES.ALT_CARDLISTS,
  data,
});

export const getUserDetails = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/auth/user/");
    if (status === 200) {
      dispatch(initUserData(response));
    }
    return { status, response };
  } catch ({ response }) {}
};

export const updateUserDetails = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.put("/auth/user/", data);
    if (status === 200) {
      notify.show("Successfully update account information", "success");
      dispatch(initUserData(response));
    }
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};

export const changeUserPassword = (data) => async () => {
  try {
    const { status } = await axios.post("/auth/password/change/", data);
    if (status === 200) {
      notify.show("Successfully changed user password", "success");
    }
    return { status };
  } catch ({ response }) {
    handleError(response);
  }
};

export const getUserNotifications = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/notifications/");
    if (status === 200) {
      dispatch(altNotification(response.results));
    }
  } catch ({ response }) {}
};

export const handleWithdrawal = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post(
      "/wallet/v2/withdraw/",
      data
    );
    if (status === 200) {
      await dispatch(fetchAllTransactions());
      return { status, response };
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const fetchCards = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/users/cards/");
    if (status === 200) {
      dispatch(altCardLists(response.results));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const getPersonalBankInfo = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/users/bank_account/");
    if (status === 200) {
      dispatch(altPersonalBankInfo(response));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const fetchAllTransactions = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get(
      "/transactions/v2/list/"
    );
    if (status === 200) {
      dispatch(altTransactionLists(response.results));
      return { status, data: response };
    }
  } catch ({ response }) {
    dispatch(altTransactionLists([]));
    handleError(response);
  }
};

export const withdraw = (data) => async () => {
  try {
    const { data: response } = await axios.get("/wallet/v2/withdraw/", data);
    return response;
  } catch ({ response }) {
    handleError(response);
  }
};

export const changeUserType = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post(
      "/users/account_change/",
      data
    );
    if (status === 200) {
      dispatch(altCatalog(response.results));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

// Store
export const fetchCatalog = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get(`/catalogs/v1/`);
    if (status === 200) {
      dispatch(altCatalog(response.results));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const updateCatalog = (data) => async (_dispatch, getState) => {
  const { business_info, ref, ...rest } = data;
  const { catalogues } = getState().user;
  try {
    const { status, data: response } = await axios.put(`/catalogs/v1/${ref}/`, {
      ...rest,
    });
    if (status === 200) {
      const index = catalogues.findIndex((item) => item.ref === ref);
      catalogues.splice(index, 1, data);
    }
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};

export const addCatalog = async (data) => {
  try {
    const { status, data: response } = await axios.post("/catalogs/v1/", data);
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};

export const getGiftLists = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/gift/");
    if (status === 200) {
      dispatch(altGiftLists(response));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const getRequestLists = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/requests/v2/");
    if (status === 200) {
      dispatch(altRequestLists(response.result));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const getUserByFluxId = async (id) => {
  return await axios.get(`/users/details/?flux_tag=${id}`);
};

export const fetchVirtualCards = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get("/virtual_cards/");
    if (status === 200) {
      dispatch(altVirtualCardLists(response.results));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const fundVirtualCards = async (data) => {
  try {
    return await axios.post("/virtual_cards/fund/", data);
  } catch ({ response }) {
    handleError(response);
  }
};

export const withdrawVirtualCards = async (data) => {
  try {
    return await axios.post("/virtual_cards/withdraw/", data);
  } catch ({ response }) {
    handleError(response);
  }
};

export const blockUnblockVirtualCards = async (data) => {
  try {
    return await axios.post("/virtual_cards/status/", data);
  } catch ({ response }) {
    handleError(response);
  }
};

export const terminateVirtualCards = async (data) => {
  try {
    return await axios.post("/virtual_cards/terminate/", data);
  } catch ({ response }) {
    handleError(response);
  }
};

export const createVirtualCard = async (data) => {
  try {
    return await axios.post("/virtual_cards/create/", data);
  } catch ({ response }) {
    handleError(response);
  }
};

export const sendRequest = async (data) => {
  try {
    const { status, data: response } = await axios.post("/requests/v2/", data);
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};

export const validateFluxId = async (id) => {
  try {
    const { status, data: response } = await axios.get(
      `/users/details/?flux_tag=${id}`
    );
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};

export const sendMoney = (data) => async (_dispatch, getState) => {
  const { pk } = getState().user.userData;
  try {
    const { status, data: response } = await axios.post("/transactions/v2/", {
      ...data,
      receiver: pk,
    });
    return { status, response };
  } catch ({ response }) {
    handleError(response);
  }
};
