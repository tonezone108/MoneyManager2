import { connect } from "react-redux";
import biz from "../components/Biz";

const mapStateToProps = state => {
  return {
    biz: state.biz
  };
};

export default connect(mapStateToProps)(biz);
