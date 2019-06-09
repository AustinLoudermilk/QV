import React, { Component } from 'react'
import { connect } from 'react-redux'
import { manageFamily } from '../../../store/actions/familyActions'
import { Redirect } from 'react-router-dom'
import FamilyMemebers from '../../dashboard/widgets/FamilyMembers'

class ManageFamily extends Component {
    state = {
        members: [],
        newMem: "",
        adding: false
    };

    handleChange = (e) => {
        this.setState({
            newMem: e.target.value
        })
    }

    handleSubmit(mems) {
        return e => {
            e.preventDefault();
            
            this.setState({ members: mems }, () => {
                this.props.manageFamily(this.state);
                this.props.history.push('/');
            });
        }
    };

    newMember(mems) { return () => { this.setState({ members: mems }); this.setState({ adding : true }) } }
    subMember = (e) => {
        if(this.state.newMem.length > 0) {
            let temp = this.state.members;
            temp.push(this.state.newMem);
            this.setState({ 
                members : temp,
                adding: false,
                newMem: ""
            });
            console.log(this.state);
        } else console.log("none");
    }

    render() {
        const { auth, profile, memArray } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        let mbrs = memArray;
        let k = -1;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit(mbrs)} className="white">
                    <h5 className="grey-text text-darken-3">The { profile.lastName } Family</h5>
                    
                    <FamilyMemebers/>

                    {this.state.adding &&
                        <div className="card z-depth-1 familymember">
                            <div className="card-content grey-text text-darken-3">
                                <div className="input-field">
                                    <label htmlFor="firstName">Name</label>
                                    <input type="text" id="firstName" onChange={this.handleChange}/>
                                </div>
                                <button id="newMem" type="button" onClick={this.subMember} className="btn pink lighten-1 z-depth-0">Done</button>
                            </div>
                        </div>
                    }

                    <button type="button" onClick={this.newMember(mbrs)} className="btn pink lighten-1 z-depth-0">New Member</button>

                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        memArray: state.firebase.profile.members
    }
}

const mapDispatch = (dispatch) => {
    return {
        manageFamily: (family) => dispatch(manageFamily(family))
    }
}

export default connect(mapState, mapDispatch)(ManageFamily)

/* 

NEW MEMBER ADD LATER

<div className="container">
    <NewMember/>

    <div className="input-field">
        <button className="btn pink lighten-1 z-depth-0">New Family Member</button>
    </div>
</div>


*/