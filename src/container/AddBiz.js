import { connect } from "react-redux";
import AddBiz from "../components/AddBiz";
import { addBiz } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    addBiz: biz => dispatch(addBiz(biz))
  };
};

export default connect(null, mapDispatchToProps)(AddBiz);
