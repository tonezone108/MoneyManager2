import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { removeBiz } from "../redux/actions";

const mapStateToProps = state => {
  return {
    biz: state.biz,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeBiz: index => dispatch(removeBiz(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
