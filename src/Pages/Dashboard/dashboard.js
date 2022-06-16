import "./dashboard.css";
import {  Outlet } from "react-router-dom";
import SideNav from "../../Layout/SideNav/SideNav";
import Footer from "../../Layout/Footer/DashFooter/Footer";
import Header from "../../Layout/Header/DashHeader/Header";
import Help from "../Help/help";

const dashboard = () => {
  return (
    <div className="Dash d-flex ">
      <div className='dash-bg-Fade'></div>
      <div className="d-none d-xl-block overflow-hidden" id="LeftSide">
        <SideNav />
      </div>

      <div className="col " id="rightSide">
        <Header />

        {/* --------Start the main dody component that rerendered in every routes --------*/}
        <div className="dhashboardConatainer my-2">
          <>
            <Outlet />
          </>
        </div>
        {/* --------End the main dody component that rerendered in every routes --------*/}

        <Footer />
      </div>
    </div>
  )
}

export default dashboard