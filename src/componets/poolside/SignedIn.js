import React, { Component } from 'react';
import Family from './Family'

const SignedIn = () => {
    return (
        <div className="project-list section">

            <h5 className="grey-text text-darken-3">Signed In</h5>
            
            <Family />
            <Family />

        </div>
    )
}

export default SignedIn;