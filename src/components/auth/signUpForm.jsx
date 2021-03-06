import "./../../pages/auth/login.css";

import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    names: "",
    email: "",
    phone: "",
    nationalId: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", user);
      toast.success("Successfully registered to rra");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="container">
      <form className="w-75 p-3" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Names"
            name="names"
            value={user.names}
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-5">
          <input
            type="tel"
            class="form-control mt-3"
            id="exampleInputEmail1"
             maxlength="10"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-5">
          <input
            type="email"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-5">
          <input
            type="number"
            class="form-control mt-3"
            id="exampleInputPassword1"
             maxlength="16"
            placeholder="nationalId"
            name="nationalId"
            value={user.nationalId}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">
          Submit
        </button>

        <div className="bottom-content mt-3 text-center">
          <p>
            Already have account !?
            <span className="span-sign" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
