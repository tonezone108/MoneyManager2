import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import {
  removeBiz,
  getUserExpenses,
  getUserAllocation,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    biz: state.biz,
    user: state.user,
    incomeExpenses: state.incomeExpenses,
    incomeAllocation: state.incomeAllocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBiz: (index) => dispatch(removeBiz(index)),
    getUserExpenses: (userName) => dispatch(getUserExpenses(userName)),
    getUserAllocation: (userName) => dispatch(getUserAllocation(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
