
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import "../../pages/dashboard/dashboard.css";

export default function AddOwner(){
     const navigate = useNavigate();

  const [owner, setOwner] = useState({
   names:"",
   phone:"",
   nationalId:"",
   address:"",
  });

  const handleChange = (e) => {
    setOwner({
      ...owner,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const token = localStorage.getItem("token");
        console.log("token", token);
      const reponse = await api.post("/car-owner/create", owner ,{
        headers: {
          'Authorization': `Bearer ${token}` 
        },
      });
      console.log("reponse", reponse);
 
      navigate("/dashboard");
      toast.success("Successfully registerd car");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
    return (
    <div className="container-fluid">
        <form className="w-50 p-3" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Names"
            name="names"
            value={owner.names}
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
            value={owner.phone}
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-5">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="address"
            name="address"
            value={owner.address}
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
            value={owner.nationalId}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">
          Submit
        </button>

        <div className="bottom-content mt-3 text-center">
          <p>
            Already registered owners !?
            <span className="span-sign" onClick={() => navigate("/owners")}>
              View all
            </span>
          </p>
        </div>
      </form>
            </div>
  );
}