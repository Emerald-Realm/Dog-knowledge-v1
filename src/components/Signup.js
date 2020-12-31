import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

  const [infomat, setInfomat] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    // value = ""
  });

  const handleInfomat = (event) => {
    setInfomat({
      ...infomat,
      [event.target.name] : event.target.value,
      // age : event.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(infomat);
    localStorage.setItem('infomat', JSON.stringify(infomat))
    setInfomat({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    })
  }

  return (
    <div>
      <div className="form-body sign-up">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-div">
            <div className="fname-div input-div">
              <label htmlFor="firstName">
                Firstname
                <input
                  type="text"
                  value={infomat.firstname}
                  id="firstName"
                  placeholder="firstname"
                  name="firstname"
                  onChange={handleInfomat}
                />
              </label>
            </div>
            <div className="lname-div input-div">
              <label htmlFor="lastName">
                Lastname
                <input
                  type="text"
                  value={infomat.lastname}
                  id="lastName"
                  placeholder="lastname"
                  name="lastname"
                  onChange={handleInfomat}
                />
              </label>
            </div>
            <div className="age-div input-div">
              <label htmlFor="age">
                Age
                <input
                  type="text"
                  value={infomat.age}
                  id="age"
                  placeholder="age"
                  onChange={handleInfomat}
                  name="age"
                />
              </label>
            </div>
            <div className="mail-div input-div">
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  value={infomat.email}
                  id="email"
                  placeholder="email"
                  onChange={handleInfomat}
                  name="email"
                />
              </label>
            </div>
            <div className="passord-div input-div">
              <label htmlFor="password">
                Password
                <input
                  type="text"
                  value={infomat.password}
                  id="password"
                  placeholder="password"
                  onChange={handleInfomat}
                  name="password"
                />
              </label>
            </div>
          </div>
            <button className="submit-btn" type="submit" >Submit</button>
          <div className="btns">
          <Link to="/sign-in">
          <button type="">back</button>
          </Link>
          <Link to="/account">
          <button type="">next</button>
          </Link>
          </div>
        </form>
        <div className="external">
          <div className="google">Login with Google</div>
          <div className="facebook">Login with facebook</div>
          <div className="gmail">Login with Gmail</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
