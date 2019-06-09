import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../../store/actions/authActions'

class SignUp extends Component {
    state = {
        firstName:  '',
        lastName:   '',
        email:      '',
        password:   '',
        isMember:   ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ isMember : document.getElementById("isMember").checked });
        this.props.signUp(this.state);
        this.props.history.push('/managefamily');
    }

    render() {
        const { auth, authError } = this.props;
        //if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">New Family</h5>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <p>
                        <label>
                            <input type="checkbox" id='isMember'/>
                            <span>Currently a member</span>
                        </label>
                    </p>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    } 
}

const mapDispatch = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapState, mapDispatch)(SignUp)
