import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };


    await axios
      .post("https://password-reset-772k.onrender.com/api/user/register-user", payload)
      .then((res) => setMsg(res.data.message))
      .catch((error) => {
        console.log(error);
        setMsg(error.data.message);
      });
      setTimeout(() =>{
    navigate("/login");
      },1000)
  };

  return (
    <div>
      <br/>
      <br/>
      <form onSubmit={handlesubmit}>
        <div className="d-flex justify-content-center h-100">
          <div className="card signup">
            <div className="card-header">
              <h3 className="text-center">Register</h3>
            </div>
            <div className="card-body">
            <label className="labels">Name</label>
            <div className="input-group form-group">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <br />
              <label className="labels">Email</label>
              <div className="input-group form-group">
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br />
              <label className="labels">Password</label>
              <div className="input-group form-group">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Already Registered?<Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <h1>{msg}</h1>
    </div>
  );
};

export default Register;
