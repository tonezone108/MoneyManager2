const loginUser = (User) => {
  fetch("http://localhost:4001/auth/login", {
    method: "POST",
    body: JSON.stringify(User),
  })
    .then((res) => res.json)
    .then((results) => console.log("results", results))
    .then((data) => {
      console.log("THIS THE DATA?" + data);
      return {
        type: "LOGIN",
        value: User,
      };
    })
    .catch((error) => {
      console.log("THIS IS THE ERROR" + error);
      return {
        type: "error",
        value: error,
      };
    });
  console.log(User, "IS THE USER HERE?");
};

const logoutUser = (User) => {
  document.cookie = "loggedIn=false; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  return {
    type: "LOGOUT",
    value: User,
  };
};

const removeBiz = (index) => {
  return {
    type: "REMOVE_BIZ",
    value: index,
  };
};

const addBiz = (biz) => {
  return {
    type: "ADD_BIZ",
    value: biz,
  };
};

export { loginUser, logoutUser, removeBiz, addBiz };
