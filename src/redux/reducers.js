import { combineReducers } from "redux";

const biz = (state = [], action) => {
  switch (action.type) {
    case "ADD_BIZ":
      return [...state, action.value];
    case "REMOVE_BIZ":
      const biz = [...state];
      biz.splice(action.value, 1);
      return biz;
    default:
      return state;
  }
};
const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.value;
    case "LOGOUT":
      return action.value;
    case "ADD_USER":
      return action.value;
    default:
      return state;
  }
};

const incomeExpenses = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_USER_EXPENSES":
      return action.value;
    case "ADD_USER_EXPENSES":
      return { state: [...state, action.value] };
      case "RESET_LIST":
        return {
          state: [...state, []],
        };
    default:
      return state;
  }
};

const incomeAllocation = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_USER_ALLOCATION":
      return action.value;
    case "ADD_USER_ALLOCATION":
      return [...state, action.value];
    default:
      return state;
  }
};

export default combineReducers({ biz, user, incomeExpenses, incomeAllocation });
