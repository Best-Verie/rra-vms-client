import Sidebar from "../../components/dashboard/sidebar";
import UserContext from "../../context/userContext";
import "../dashboard/dashboard.css";
import { useContext } from "react";
import AllOwners from "../../components/owners/AllOwners";
import AllVehiclesList from "../../components/vehicles/AllVehiclesList";
import History from "../../components/dashboard/logs";

export default function AllVehicles() {
  const { user } = useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-lg-2 sideb">
          <Sidebar />
        </div>
        <div className="col-md-8 col-lg-8 col-sm-12">
          <AllVehiclesList/>
        </div>
        <div className="col-md-2 col-lg-2">
            <History/>
        </div>
      </div>
    </div>
  );
}
