import React, { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  useHistory } from "react-router-dom";
import firebase from "firebase"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((user) => {
      history.push('/')
    })
    .catch((err) => {
      alert('Please Try Again')
    })
    

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {" "}
      <div>
        <Nav class="navbar navbar-light bg-dark">
          <i class="far fa-sticky-note fa-2x text-danger">Write Notes</i>
         <Link to='/' ><button
            className="btn btn-primary float-right"
            style={{ marginLeft: "93%", marginTop: "-2%" }}
            type="submit"
          >
            Logout
          </button></Link>
        </Nav>
      </div>
      <div className=" d-flex align-items-center justify-content-center mt-5">
        <Card
          style={{
            marginTop: "5%",
            width: "100%",
            maxWidth: 400,
            backgroundColor: "black",
            borderRadius: "5%",
          }}
        >
          <div className=" text-center text-white mt-3">
            <h3>User Signup</h3>
          </div>
          <Card.Body>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mt-3">
                <label className="text-white mt-2">
                  <h3>Email</h3>
                </label>
                <input
                  className="form-control text-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="text-white mt-2">
                  <h3>Password</h3>
                </label>
                <input
                  class="form-control "
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="btn btn-primary btn-m mt-5 float-right"
                type="submit"
              >
                Signup
              </button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
