import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AllVehiclesList(){
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);

  const retrievevehicles = async () => {
    const response = await api.get("/vehicle/all", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return response.data;
  };

  useEffect(() => {
    const getAllvehicles = async () => {
      const allvehicles = await retrievevehicles();
      if (allvehicles) setVehicles(allvehicles);
    };
    getAllvehicles();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end content-div">
        <button className="btn btn-primary" onClick={() => navigate("/addVehicle")}>
          + Add Vehicle
        </button>
      </div>

      <div className="content">
        <RenderOwnerList vehicles={vehicles} setVehicles={setVehicles} />
      </div>
    </div>
  );
}

const RenderOwnerList = (props) => {
  const navigate = useNavigate();


  return (
    <table class="table table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Chasis Number</th>
          <th scope="col">manufacture Company</th>
          <th scope="col">price</th>
          <th scope="col">Model</th>
          <th scope="col">plateNumber</th>
        </tr>
      </thead>
      <tbody>
        {props.vehicles &&
          props.vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle._id}</td>
              <td>{vehicle.chasisNumber}</td>
              <td>{vehicle.manufastureCompany}</td>
              <td>{vehicle.price}</td>
              <td>{vehicle.modelName}</td>
              <td>{vehicle.plateNumber}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}