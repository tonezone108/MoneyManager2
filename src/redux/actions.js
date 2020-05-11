const loginUser = (User) => {
  // console.log(User);
  // return {
  //   type: "LOGIN",
  //   value: User,
  // };

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
          console.log("THIS THE DATA?", data);

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
////
const getUserExpenses = (User) => {
  console.log("ACTIONS getUserExpense", User);
  return function (dispatch) {
    fetch(`http://localhost:4001/expenses/${User.userName}`, {
      method: "GET",
      // body: JSON.stringify(User),

      headers: {
        "authorization": `${User.token}`,
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        console.log("ACTIONS res", res);
        return res.json();
      })
      .then((data) => {
        console.log("THIS THE DATA?", data);

        dispatch(userExpensesLoaded(data));
      })

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

const userExpensesLoaded = (data) => {
  return {
    type: "LOAD_USER_EXPENSES",
    value: data,
  };
};

const getUserAllocation = (User) => {
  return function (dispatch) {
    fetch(`http://localhost:4001/allocation/${User}`, {
      method: "GET",
      // body: JSON.stringify(User),
      headers: {
        "authorization": `${User.token}`,
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("THIS THE DATA?", data);

        dispatch(userAllocationLoaded(data));
      })

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

const userAllocationLoaded = (data) => {
  console.log(data, "userAllocationLoaded data");
  return {
    type: "LOAD_USER_ALLOCATION",
    value: data,
  };
};

//make new actions here

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

const addExpense = (incomeExpenses) => {
  return {
    type: "ADD_USER_EXPENSES",
    value: incomeExpenses,
  };
};

const addAllocation = (incomeAllocation) => {
  return {
    type: "ADD_USER_ALLOCATION",
    value: incomeAllocation,
  };
};

const createExpense = (incomeExpenses, User) => {
  //HOW TO USE?
  return function (dispatch) {
    fetch(`http://localhost:4001/expenses/${User}`, {
      //userName needs to go here
      method: "PUT",
      body: JSON.stringify(incomeExpenses),
      headers: {
        "Content-Type": "application/json",
        "authorization": `${User.token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          console.log("THIS THE DATA?" + data);
          dispatch(addExpense(incomeExpenses));
        })
      )
      .catch((error) => {
        fetch("http://localhost:4001/expenses", {
          //userName needs to go here
          method: "POST",
          body: JSON.stringify(incomeExpenses),
          headers: {
            "Content-Type": "application/json",
            "authorization": `${User.token}`,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((res) =>
            res.json().then((data) => {
              console.log("THIS THE DATA?" + data);
              dispatch(addExpense(incomeExpenses));
            })
          )
          .catch((error) => {
            console.log("THIS IS THE ERROR : " + error);
            return {
              type: "error",
              value: error,
            };
          });

        console.log("THIS IS THE ERROR : " + error);
        return {
          type: "error",
          value: error,
        };
      });
    console.log(incomeExpenses, "IS THE incomeExpense Here?");
  };
};

const createAllocation = (incomeAllocation) => {
  //HOW TO USE?
  return function (dispatch) {
    fetch("http://localhost:4001/expenses/userName", {
      //userName needs to go here
      method: "PUT",
      body: JSON.stringify(incomeAllocation),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          console.log("THIS THE DATA?" + data);
          dispatch(addAllocation(incomeAllocation));
        })
      )
      .catch((error) => {
        fetch("http://localhost:4001/expenses", {
          //userName needs to go here
          method: "POST",
          body: JSON.stringify(incomeAllocation),
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((res) =>
            res.json().then((data) => {
              console.log("THIS THE DATA?" + data);
              dispatch(addExpense(incomeAllocation));
            })
          )
          .catch((error) => {
            console.log("THIS IS THE ERROR : " + error);
            return {
              type: "error",
              value: error,
            };
          });

        console.log("THIS IS THE ERROR : " + error);
        return {
          type: "error",
          value: error,
        };
      });
    console.log(incomeAllocation, "IS THE incomeAllocation Here?");
  };
};

export {
  loginUser,
  logoutUser,
  removeBiz,
  addBiz,
  addUser,
  getUserExpenses,
  getUserAllocation,
  addExpense,
  addAllocation,
  createExpense,
};
