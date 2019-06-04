import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFamily } from '../../../store/actions/familyActions'

class CreateFamily extends Component {
    state = {
        firstName: '',
        lastName: ''
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
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Family</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div> 

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        createFamily: (family) => dispatch(createFamily(family))
    }
}

export default connect(null, mapDispatch)(CreateFamily)

/* 

NEW MEMBER ADD LATER

<div className="container">
    <NewMember/>

    <div className="input-field">
        <button className="btn pink lighten-1 z-depth-0">New Family Member</button>
    </div>
</div>


*/