const loginUser = User => {
  console.log(User, "IS THE USER HERE?");
  fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(User)
  })
    .then(res => res.json)
    .then(results => console.log("results", results));
  return {
    type: "LOGIN",
    value: User
  };
};

const logoutUser = User => {
  document.cookie = "loggedIn=false; expires = Thu, 01 Jan 1970 00:00:00 GMT";
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
