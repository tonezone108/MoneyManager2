import { connect } from "react-redux";
import AddExpenses from "../components/AddExpenses";
import { createExpense } from "../redux/actions";

const mapStateToProps = (state) => {
  // return { user: state.user }
  // const { user } = state;
  return {
    user: state.user,
    incomeExpenses: state.incomeExpenses,
  };
  // return {};
  // const { incomeExpenses } = state;
  // return {
  //   incomeExpenses,
  // };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createExpense: (userName) => dispatch(createExpense(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);
