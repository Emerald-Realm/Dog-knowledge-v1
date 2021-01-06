import React from 'react'
import {Link} from 'react-router-dom'


function Account() {

    const infomat = JSON.parse(localStorage.getItem('infomat'));

    return (
        <div>
            <div className="info">
                <div className="name">
                    <p>Name: {`${infomat.firstname} ${infomat.lastname}`} </p>
                    <p></p>
                </div>
                <div className="mail">
                    <p>Email: {infomat.email} </p>
                    <p></p>
                </div>
                <div className="age">
                    <p>Age: {infomat.age} </p>
                    <p></p>
                </div>
            </div>
            
            <Link to="/signup">
                <button>back</button>
            </Link>
        </div>
    )
}

export default Account
