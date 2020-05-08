import { connect } from "react-redux";
import AddAllocation from "../components/AddAllocation";
import { addAllocation } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (incomeAllocation) => dispatch(addAllocation(incomeAllocation)),
  };
};

export default connect(null, mapDispatchToProps)(AddAllocation);
