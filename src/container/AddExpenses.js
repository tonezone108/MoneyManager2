import { connect } from "react-redux";
import AddExpenses from "../components/AddExpenses";
import { createExpense } from "../redux/actions";

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
};

const mapDispatchToProps = (dispatch) => {
  return {
    createExpense: (incomeExpenses) => dispatch(createExpense(incomeExpenses)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);
