import React, { Component } from 'react'
import NewMember from './NewMember'

class CreateFamily extends Component {
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
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Family</h5>
                    <div className="container">
                        <NewMember/>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">New Family Member</button>
                        </div>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateFamily