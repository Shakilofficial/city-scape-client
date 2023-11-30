import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>City Scape | Dashboard</title>
      </Helmet>
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-24">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
