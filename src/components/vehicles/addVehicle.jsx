
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import "../../pages/dashboard/dashboard.css";

export default function AddVehicle(){
     const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    chasisNumber: "",
    manufastureCompany: "",
    manufactureYear: "",
    price: "",
    modelName: "",
    plateNumber:""
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const token = localStorage.getItem("token");
        console.log("token", token);
      const reponse = await api.post("/vehicle/create", vehicle ,{
        headers: {
          'Authorization': `Bearer ${token}` 
        },
      });
      console.log("reponse", reponse);
 
      navigate("/vehicles");
      toast.success("Successfully added vehicle");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
    return (
    <div className="container-fluid">
        <form className="w-50 p-3 ml-5" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Chasis Number"
            name="chasisNumber"
            value={vehicle.chasisNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Manufacture Company"
            name="manufastureCompany"
            value={vehicle.manufastureCompany}
            onChange={handleChange}
          />
        </div>

           <div className="form-group">
          <input
            type="text"
            class="form-control mt-3"
            placeholder="Manufacture year"
            name="manufactureYear"
            value={vehicle.manufactureYear}
            onChange={handleChange}
          />
        </div>
        
        <div class="form-group">
          <input
            type="number"
            class="form-control mt-3"
            placeholder="price"
            name="price"
            value={vehicle.price}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            placeholder="model Name"
            name="modelName"
            value={vehicle.modelName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="plate Number"
            name="plateNumber"
            value={vehicle.plateNumber}
            onChange={handleChange}
          />
        </div>

        
        <button type="submit" class="btn btn-primary w-100">
          Submit
        </button>

        <div className="bottom-content mt-3 text-center">
          <p>
            Already registerd vehicles<span className="span-sign" onClick={() => navigate("/vehicles")}>View vehicles</span>
          </p>
        </div>
      </form>
            </div>
     
  );
}