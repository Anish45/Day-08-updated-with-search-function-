import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
  const url = "http://localhost:5000/submit";
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });
    setData({ name: "", phone: "", email: "", password: "" });
  }

  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <h3>Sign Up</h3>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 d-flex justify-content-center">
          <form onSubmit={(e) => submit(e)}>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                onChange={(e) => handle(e)}
                value={data.name}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Phone</label>
              <input
                type="Number"
                className="form-control"
                id="phone"
                onChange={(e) => handle(e)}
                value={data.phone}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => handle(e)}
                value={data.email}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => handle(e)}
                value={data.password}
                required
              />
            </div>
            <div className="row">
              <div className="col-5">
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </div>
              <div className="col-7">
                <Link to="/display">
                  <button className="btn btn-primary mt-3">Display Data</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
