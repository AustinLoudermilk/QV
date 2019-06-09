import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class FamilyMembers extends Component {
    render() {
        const { auth, memArray } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        let mbrs = memArray;
        let k = -1;

        return (
            <div className="family-list section">
                <p className="grey-text">Family Members</p>

                { mbrs && mbrs.map(mbrs => {
                    k++;
                    return (
                        <div className="card z-depth-1 familymember">
                            <div className="card-content grey-text text-darken-3">
                                { mbrs }
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

const mapState = (state) => {
    return {
        auth: state.firebase.auth,
        memArray: state.firebase.profile.members
    }
}

export default connect(mapState)(FamilyMembers);

