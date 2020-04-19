const loginUser = (User) => {
  return function (dispatch) {
    fetch("http://localhost:4001/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          console.log("THIS THE DATA?" + data);
          dispatch(userLoaded(data));
        })
      )
      // .then((results) => console.log("results", results))

      .catch((error) => {
        console.log("THIS IS THE ERROR : " + error);
        return {
          type: "error",
          value: error,
        };
      });
    console.log(User, "IS THE USER HERE?");
  };
};

//This is new
const addUser = (User) => {
  return function (dispatch) {
    fetch("http://localhost:4001/auth/signup", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          console.log("THIS THE DATA?" + data);
          dispatch(userAdded(data));
        })
      )
      // .then((results) => console.log("results", results))

      .catch((error) => {
        console.log("THIS IS THE ERROR : " + error);
        return {
          type: "error",
          value: error,
        };
      });
    console.log(User, "IS THE USER HERE?");
  };
};

const userLoaded = (data) => {
  return {
    type: "LOGIN",
    value: data,
  };
};

const userAdded = (data) => {
  return {
    type: "ADD_USER",
    value: data,
  };
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

export { loginUser, logoutUser, removeBiz, addBiz, addUser };
