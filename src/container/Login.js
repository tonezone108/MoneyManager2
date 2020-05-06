import { connect } from "react-redux";
import App from "../components/Login";
import {
  loginUser,
  addUser,
  getUserExpenses,
  getUserAllocation,
} from "../redux/actions";

const mapStateToProps = (state) => {
  // return { user: state.user }
  const { user } = state;
  return {
    user,
  };
  const { incomeExpenses } = state;
  return {
    incomeExpenses,
  };

  const { incomeAllocation } = state;
  return {
    incomeAllocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    addUser: (user) => dispatch(addUser(user)),
    getUserExpenses: (incomeExpenses) =>
      dispatch(getUserExpenses(incomeExpenses)),
    getUserAllocation: (incomeAllocation) => dispatch(incomeAllocation),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
