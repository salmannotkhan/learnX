import React from "react";
import RegisterUser from "../images/RegisterUser.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="hero is-fullheight">
      <div className="columns">
        <div
          className="column is-four-fifths"
          style={{ margin: "auto", marginTop: 25 }}
        >
          <div className="box">
            <form
              style={{
                backgroundColor: "#FFFFFF",
              }}
            >
              <div class="columns is-vcentered">
                <div class="column is-8">
                  <h3
                    class="title is-4"
                    style={{ color: "#060325", textAlign: "center" }}
                  >
                    Hello Folks...! Register Here : )
                  </h3>
                  <figure class="image is-16by9">
                    <img src={RegisterUser} alt="Error"></img>
                  </figure>
                </div>
                <div class="column">
                  <div class="columns is-multiline is-mobile">
                    <div class="column is-full">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          First Name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Enter First Name"
                            style={{ backgroundColor: "transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Last Name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Enter Last Name"
                            style={{ backgroundColor: "#transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Enter Email"
                            style={{ backgroundColor: "#transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="column is-half">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Mobile
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="number"
                            placeholder="Enter Mobile"
                            style={{ backgroundColor: "#transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div class="column is-half">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Password
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="password"
                            placeholder="Enter Password"
                            style={{ backgroundColor: "#transparent" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div className="field">
                        <label className="label" style={{ color: "#060325" }}>
                          Role
                        </label>
                        <div className="control">
                          <label class="radio" style={{ color: "#112031" }}>
                            Trainer
                            <input
                              type="radio"
                              name="usertype"
                              value="Trainer"
                            />
                          </label>
                          <label class="radio" style={{ color: "#112031" }}>
                            Trainee
                            <input
                              type="radio"
                              name="usertype"
                              value="Trainee"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns is-centered is-vcentered">
                    <div className="column is-8">
                      <div
                        class="field is-grouped"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        <p class="control">
                          <a
                            class="button is-primary"
                            style={{ color: "#112031", borderRadius: 25 }}
                          >
                            Register
                          </a>
                        </p>
                        <p class="control">
                          <a
                            class="button is-light"
                            style={{ color: "#112031", borderRadius: 25 }}
                          >
                            Cancel
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="columns is-centered is-vcentered">
                    <div className="column is-9">
                      <div class="field is-grouped">
                        <p class="control">
                          <Link
                            to="Login"
                            style={{
                              backgroundColor: "transparent",
                              borderColor: "transparent",

                              color: "#112031",
                            }}
                          >
                            Already a User? Login Here
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
export default Register;
