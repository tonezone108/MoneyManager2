import { connect } from "react-redux";
import App from "../components/Login";
import { loginUser, addUser } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    addUser: (user) => dispatch(addUser(user)),
  };
};

const mapStateToProps = (state) => {
  // return { user: state.user }
  const { user } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
