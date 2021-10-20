import React from "react";
import "bulma/css/bulma.min.css";

import { Link } from "react-router-dom";
import loginimg from "../images/1.png";
function Login() {
  return (
    <div className="hero is-fullheight">
      <div className="columns is-vcentered">
        <div
          className="column is-three-quarters"
          style={{ margin: "auto", marginTop: 90 }}
        >
          <div className="box">
            <form style={{ backgroundColor: "#FFFFFF" }}>
              <h3
                className="title is-4"
                style={{ color: "#060325", textAlign: "center" }}
              >
                Welcome Back !! Login Here :)
              </h3>
              <div className="columns is-vcentered">
                <div className="column is-8">
                  <figure className="image is-5by3">
                    <img src={loginimg} alt="Error"></img>
                  </figure>
                </div>
                <div className="column">
                  <div className="columns is-vcentered">
                    <div className="column is-11">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Username
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Enter Username"
                            style={{ backgroundColor: "transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns is-vcentered">
                    <div className="column is-11">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Password
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="password"
                            placeholder="Enter Password"
                            style={{ backgroundColor: "transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns is-centered is-vcentered">
                    <div className="column is-9">
                      <div className="field is-grouped">
                        <p className="control">
                          <Link
                            className="button is-primary"
                            style={{
                              color: "#112031",
                              backgroundColor: "#FFFFF",
                              borderRadius: 25,
                            }}
                          >
                            SignIn
                          </Link>
                        </p>
                        <p className="control">
                          <Link
                            className="button is-light"
                            style={{ color: "#112031", borderRadius: 25 }}
                          >
                            Cancel
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="columns  is-centered is-vcentered">
                    <div className="column is-10">
                      <div className="field is-grouped">
                        <p className="control">
                          <Link
                            to="Register"
                            style={{
                              backgroundColor: "transparent",
                              borderColor: "transparent",
                              color: "#112031",
                            }}
                          >
                            New User? Create Account
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
