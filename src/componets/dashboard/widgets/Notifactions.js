import React, { Component } from 'react';
import moment from 'moment';

const Notifactions = (props) => {
    const { notifactions } = props;

    console.log(notifactions);
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifactions</span>
                    <ul className="signedin">

                        {notifactions && notifactions.map(item => {
                            return (
                                <div className="card z-depth-0">
                                    <div className="card-content">
                                        <li key={ item.id }>
                                            <span className="pink-text">{item.user}</span>
                                            <span>{item.content}</span>
                                            <div className="note-date grey-text">
                                                {moment(item.time.toDate()).fromNow()}
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifactions;