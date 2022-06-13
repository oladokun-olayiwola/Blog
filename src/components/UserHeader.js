import _ from 'lodash'
import React from "react";
import { connect } from "react-redux";


class UserHeader extends React.Component {
  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    // const {user} = this.props;
    // console.log(user)
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapPropsToState = (state, ownProps) => {
//   console.log(ownProps);
  //    return { user : state.users.find(user => user.id === ownProps.userId) }
  return { users: state.users };
};

export default connect(mapPropsToState)(UserHeader);






























// import React from "react";
// import { connect } from "react-redux";
// import { user } from "../actions";

// class UserHeader extends React.Component {
//   componentDidMount() {
//     this.props.user(this.props.userId);
//   }

//   render() {
//     const { user } = this.props;

//     if (!user) {
//       return null;
//     }

//     return <div className="header">{user.name}</div>;
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return { user: state.users.find((user) => user.id === ownProps.userId) };
// };

// export default connect(mapStateToProps, { user })(UserHeader);
