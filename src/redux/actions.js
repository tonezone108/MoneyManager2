const loginUser = User => {
  return {
    type: "LOGIN",
    value: User
  };
};

const logoutUser = User => {
  return {
    type: "LOGOUT",
    value: User
  };
};

const removeBiz = index => {
  return {
    type: "REMOVE_BIZ",
    value: index
  };
};

const addBiz = biz => {
  return {
    type: "ADD_BIZ",
    value: biz
  };
};

export { loginUser, logoutUser, removeBiz, addBiz };
