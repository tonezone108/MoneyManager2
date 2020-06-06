const loginUser = (User) => {
  return function (dispatch) {
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userLoaded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

//This is new
const addUser = (User) => {
  return function (dispatch) {
    fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userAdded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
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
  return function (dispatch) {
    fetch(`http://localhost:80/expenses/${User.userName}`, {
      method: "GET",
      // body: JSON.stringify(User),

      headers: {
        "authorization": `${User.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(userExpensesLoaded(data));
      })

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
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
    fetch(`http://localhost:80/allocation/${User.userName}`, {
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
        dispatch(userAllocationLoaded(data));
      })

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

const userAllocationLoaded = (data) => {
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

const createExpense = (incomeExpenses) => {
  //HOW TO USE?
  return function (dispatch) {
    fetch(`http://localhost:80/expenses/${incomeExpenses.userName}`, {
      //userName needs to go here
      method: "PUT",
      body: JSON.stringify(incomeExpenses),
      headers: {
        // "access-control-allow-methods": "PUT",
        "authorization": `${incomeExpenses.token}`,
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(addExpense(incomeExpenses));
        })
      )
      .catch((error) => {
        fetch("http://localhost:80/expenses", {
          //userName needs to go here
          method: "POST",
          body: JSON.stringify(incomeExpenses),
          headers: {
            "authorization": `${incomeExpenses.token}`,
            "Content-Type": "application/json",

            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((res) =>
            res.json().then((data) => {
              dispatch(addExpense(incomeExpenses));
            })
          )
          .catch((error) => {
            return {
              type: "error",
              value: error,
            };
          });

        return {
          type: "error",
          value: error,
        };
      });
  };
};

const createAllocation = (incomeAllocation) => {
  //HOW TO USE?
  return function (dispatch) {
    fetch(`http://localhost:80/allocation/${incomeAllocation.userName}`, {
      //userName needs to go here
      method: "PUT",
      body: JSON.stringify(incomeAllocation),
      headers: {
        "authorization": `${incomeAllocation.token}`,
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(addAllocation(incomeAllocation));
        })
      )
      .catch((error) => {
        fetch("http://localhost:80/allocation", {
          //userName needs to go here
          method: "POST",
          body: JSON.stringify(incomeAllocation),
          headers: {
            "authorization": `${incomeAllocation.token}`,
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((res) =>
            res.json().then((data) => {
              dispatch(addAllocation(incomeAllocation));
            })
          )
          .catch((error) => {
            return {
              type: "error",
              value: error,
            };
          });

        return {
          type: "error",
          value: error,
        };
      });
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
  createAllocation,
};
