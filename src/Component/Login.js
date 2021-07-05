import React, { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import firebase from "firebase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((user) => {
      history.push('/todo')
      alert("Login successful")
    })
    .catch((err) => {
      alert('Email/Password invalid')
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
         <Link to='/signup' ><button
            className="btn btn-primary float-right"
            style={{ marginLeft: "93%", marginTop: "-2%" }}
            type="submit"
          >
            Signup
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
            <h3>User Login</h3>
          </div>
          <Card.Body>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mt-3">
                <label className="text-white mt-2">
                  <h3>Email</h3>
                </label>
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{backgroundColor:'white'}}
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
                  style={{backgroundColor:'white'}}
                />
              </div>

              <button
                className="btn btn-primary btn-m mt-5 float-right"
                type="submit"
              >
                login
              </button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
