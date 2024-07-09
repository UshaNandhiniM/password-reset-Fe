import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post(
        "https://password-reset-772k.onrender.com/api/user/login-user",
        payload
      )
      .then((res) => {
        setMsg(res.data.Message);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setMsg(error.response.data.Message);
      });
  };

    return (
        <div>
          <h1>{msg}</h1>
           <br/>
           <br/>
            <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center h-100">
          <div className="card signin">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <label className="labels">Email</label>
              <div className="input-group form-group">
                <input type="email"  id="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br />
              <label className="labels">Password</label>
              <div className="input-group form-group">
                <input type="password" id="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <div className="form-group text-center">
                <button type="submit"  className="btn btn-primary">
                Login
                </button>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/register">Register</Link>
              </div>
              <div className="d-flex justify-content-center links">
                <Link to="/forgetpassword">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
    </form>
        </div>
    );
};

export default Login;