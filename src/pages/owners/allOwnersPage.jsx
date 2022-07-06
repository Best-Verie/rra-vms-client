import Sidebar from "../../components/dashboard/sidebar";
import "../dashboard/dashboard.css";
import AllOwners from "../../components/owners/AllOwners";
import History from "../../components/dashboard/logs";

export default function AllOwnersPage() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-lg-2 sideb">
          <Sidebar />
        </div>
        <div className="col-md-8 col-lg-8 col-sm-12">
          <AllOwners/>
        </div>
        <div className="col-md-2 col-lg-2">
            <History/>
        </div>
      </div>
    </div>
  );
}
