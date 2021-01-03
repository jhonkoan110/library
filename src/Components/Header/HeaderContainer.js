import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";


class HeaderContainer extends Component {

    render () {

        const { user, token } = this.props;

        return <Header 
                    user={user}
                    token={token}
        />
    }
}


const mapStateToProps = state => ({
    user: state.auth.user,
    token: state.auth.token
});


export default connect(mapStateToProps)(HeaderContainer);