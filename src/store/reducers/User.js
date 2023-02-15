import TYPES from "../type";

const initState = {
  authenticated: false,
  userData: {},
  transactionLists: "",
  notificationData: "",
  catalogues: "",
  giftLists: "",
  requestLists: "",
  virtualCardLists: "",
  cardLists: "",
  personalBankInfo: "",
};

const UserReducer = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case TYPES.LOGIN_USER:
      return { ...state, authenticated: data };
    case TYPES.LOGOUT_USER:
      return initState;
    case TYPES.ALT_TRANSACTION_LISTS:
      return { ...state, transactionLists: data };
    case TYPES.ALT_NOTIFICATION:
      return { ...state, notificationData: data };
    case TYPES.USER_DATA:
      return { ...state, userData: data };
    case TYPES.ALT_CATELOG:
      return { ...state, catalogues: data };
    case TYPES.ALT_REQUEST_LISTS:
      return { ...state, requestLists: data };
    case TYPES.ALT_GIFT_LISTS:
      return { ...state, giftLists: data };
    case TYPES.ALT_CARDLISTS:
      return { ...state, cardLists: data };
    case TYPES.ALT_VIRTUAL_CARDS_LISTS:
      return { ...state, virtualCardLists: data };
    case TYPES.ALT_PERSONALBANK_INFO:
      return { ...state, personalBankInfo: data };

    default:
      return state;
  }
};

export default UserReducer;
