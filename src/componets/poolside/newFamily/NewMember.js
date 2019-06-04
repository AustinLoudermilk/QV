import React, { Component } from 'react'

class NewMember extends Component {
    state = {
        firstName: '',
        lastName: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    render() {
        return (
            <div className="card z-depth-1 familymember">
                <div className="card-content grey-text text-darken-3">
                <   h5 className="grey-text text-darken-1">New Family Member</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewMember