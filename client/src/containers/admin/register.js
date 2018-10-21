import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegisterUser } from '../../actions'

class Register extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    handleInputEmail = (event) => {

    }
    handleInputPassword = (event) => {

    }
    handleInputName = (event) => {

    }
    handleInputLastname = (event) => {

    }

    submitForm = (e) => {
        e.preventDefault()
    }

    componentWillMount = () => {
        this.props.dispatch(getUsers())
    }

    showUsers = (user) => (
        user.users ?
            user.users.map((item) => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            ))
            : null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>
                </form>
                <div className="current_users">
                    <h4>Uurrent Users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Register)