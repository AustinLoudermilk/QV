import React, { Component } from 'react';
import Family from './Family'

const SignedIn = (props) => {
    return (
        /*<div className="project-list section">

            <h5 className="grey-text text-darken-3">Signed In</h5>
            
            { families && families.map(family => {
                let pin = -1;
                if(family.pin) pin = family.pin;
                return (
                    <Family family={ family } key={ pin }/>
                )
            })}

        </div>*/

        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Signed in</span>
                    <ul className="signedin">
                        <li>
                            <div className="card">
                                <div className="card-content">
                                    SIGNED IN
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="card-content">
                                    SIGNED IN
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="card-content">
                                    SIGNED IN
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SignedIn;