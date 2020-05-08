import { connect } from "react-redux";
import AddExpenses from "../components/AddExpenses";
import { addExpense } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (incomeExpenses) => dispatch(addExpense(incomeExpenses)),
  };
};

export default connect(null, mapDispatchToProps)(AddExpenses);
