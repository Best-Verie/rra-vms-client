import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AllOwners(){
  const navigate = useNavigate();

  const [owners, setOwners] = useState([]);

  const retrieveowners = async () => {
    const response = await api.get("/car-owner/all", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return response.data;
  };

  useEffect(() => {
    const getAllowners = async () => {
      const allowners = await retrieveowners();
      if (allowners) setOwners(allowners);
    };
    getAllowners();
  }, []);

  return (
    <div className="container-fluid">
        <div className="d-flex justify-content-end content-div">
        <button className="btn btn-primary" onClick={() => navigate("/addOwner")}>
          + Add Owner
        </button>
      </div>

      <div className="content">
        <RenderOwnerList owners={owners} setowners={setOwners} />
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
          <th scope="col">Name</th>
          <th scope="col">NID</th>
          <th scope="col">Phone Number</th>
        
        </tr>
      </thead>
      <tbody>
        {props.owners &&
          props.owners.map((owner) => (
            <tr key={owner._id}>
              <td>{owner._id}</td>
              <td>{owner.names}</td>
              <td>{owner.nationalId}</td>
              <td>{owner.phone}</td>

             
            </tr>
          ))}
      </tbody>
    </table>
  );
}