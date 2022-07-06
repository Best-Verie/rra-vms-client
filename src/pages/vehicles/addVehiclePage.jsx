import Sidebar from "../../components/dashboard/sidebar";
import "../dashboard/dashboard.css";
import AddVehicle from "../../components/vehicles/addVehicle";
import History from "../../components/dashboard/logs";

export default function AddVehiclePage() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-lg-2 sideb">
          <Sidebar />
        </div>
        <div className="col-md-8 col-lg-8 col-sm-12">
            <div className="addOwner">
             <AddVehicle/>
            </div>
        </div>
        <div className="col-md-2 col-lg-2">
            <History/>
        </div>
      </div>
    </div>
  );
}
