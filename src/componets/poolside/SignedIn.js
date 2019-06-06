import React, { Component } from 'react';
import Family from './Family'

const SignedIn = ( { families } ) => {
    return (
        <div className="project-list section">

            <h5 className="grey-text text-darken-3">Signed In</h5>
            
            { families && families.map(family => {
                let pin = -1;
                if(family.pin) pin = family.pin;
                return (
                    <Family family={ family } key={ pin }/>
                )
            })}

        </div>
    )
}

export default SignedIn;