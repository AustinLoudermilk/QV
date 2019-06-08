import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFamily } from '../../../store/actions/familyActions'
import { Redirect } from 'react-router-dom'

class CreateFamily extends Component {
    state = {
        members: []
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createFamily(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth, profile } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        console.log(profile);

        console.log(auth);

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">The { profile.lastName } Family</h5>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatch = (dispatch) => {
    return {
        createFamily: (family) => dispatch(createFamily(family))
    }
}

export default connect(mapState, mapDispatch)(CreateFamily)

/* 

NEW MEMBER ADD LATER

<div className="container">
    <NewMember/>

    <div className="input-field">
        <button className="btn pink lighten-1 z-depth-0">New Family Member</button>
    </div>
</div>


*/