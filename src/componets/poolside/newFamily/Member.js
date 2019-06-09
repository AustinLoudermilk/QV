import React, { Component } from 'react';

const Member = (props) => {
    let state = {
        firstName: ''
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const handleChange = (e) => {
        state[e.target.id] = e.target.value;
    }



    return (
        <div className="card z-depth-1 familymember">
            <div className="card-content grey-text text-darken-3">
                <div className="input-field">
                    { props.member }
                </div>
            </div>
        </div>
    )
}

export default Member;

/*
import React, { Component } from 'react'

class NewMember extends Component {
    state = {
        firstName: ''
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
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }
}
*/