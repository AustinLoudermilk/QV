import React from 'react'

const Family = ({ family }) => {
    return  (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{family.lastName} Family</span>
                <p>Josh, Jessica, Austin, Lexi, Caleb</p>
                <p className="grey-text">Guests: {family.guests}</p>
            </div>
        </div>
    );
}

export default Family