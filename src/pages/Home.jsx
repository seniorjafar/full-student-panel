import React, { useState } from "react";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { contact } = useAuth();

  const [datas, setData] = useState({
    username: "",
    password: "",
    agr: "",
    group: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datas.username.length >= 3 && datas.password.length >= 4 && datas.age.length >=5 && datas.group.length >=6) {
      contact(datas);
      navigate("./contact");
    }
    return;
  };

  return (
    <div className="container">
      <form className="w-50 mx-auto p-5" onSubmit={handleSubmit}>
        <h1 className="text-center py-3">My Login</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={datas.username}
            onChange={(e) => setData({ ...datas, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={datas.password}
            onChange={(e) => setData({ ...datas, password: e.target.value })}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="password"
            value={datas.age}
            onChange={(e) => setData({ ...datas, age: e.target.value })}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label">
            Group
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={datas.group}
            onChange={(e) => setData({ ...datas, group: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
