import { connect } from "react-redux";
import AddAllocation from "../components/AddAllocation";
import { createAllocation } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    incomeAllocation: state.incomeAllocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAllocation: (userName) => dispatch(createAllocation(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAllocation);
