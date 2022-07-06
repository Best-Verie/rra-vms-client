import { useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import "./../../pages/auth/login.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
export default function LoginForm() {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const [user, setUser_] = useState({
    email: "",
    nationalId: "",
  });

  const handleChange = (e) => {
    setUser_({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reponse = await api.post("/auth/login", user);
      console.log("reponse", reponse);
      localStorage.setItem("token", reponse.data.accessToken);
      setUser(reponse.data.user);
      navigate("/dashboard");
      toast.success("Successfully logged in");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="container">
      <form className="w-75 p-3" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="email"
            class="form-control mt-3"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-5">
          <input
            type="number"
             maxlength="16"
            class="form-control mt-3"
            placeholder="national Id"
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
            No account !?<span className="span-sign" onClick={() => navigate("/signUp")}>Sign up</span>
          </p>
        </div>
      </form>
    </div>
  );
}
