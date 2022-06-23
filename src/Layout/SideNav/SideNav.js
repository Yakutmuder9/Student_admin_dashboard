import "./sideNav.css";
import { useState, useEffect } from "react";
import { ProSidebar, SidebarHeader } from "react-pro-sidebar";
import { Button } from "reactstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { db } from "../../Auth/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const SideNav = () => {
  const [dropdown, setDropdown] = useState([]);
  const courseaEnrolledRef = collection(db, "enrollment");
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(courseaEnrolledRef);
      setDropdown(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <ProSidebar
      collapsed={menuCollapse}
      className="bg-dark dash-sideNav my-3 mx-3 overflow-hidden"
    >
      <div className="sideNavFade"></div>

      <SidebarHeader className="dash_logo overflow-hidden">
        <div className="logotext ">
          <div>
            {menuCollapse ? (
              <div className="col shadow d-block" id="DashboardLogo">
                <h1 className="text-center overflow-hidden">D</h1>
              </div>
            ) : (
              <div
                className="col pt-2 shadow overflow-hidden"
                id="DashboardLogo"
              >
                <h3 className="ps-4 pb-2 pt-2 bolder overflow-hidden">
                  MyDashboard
                </h3>
              </div>
            )}
          </div>
        </div>

        <div className="closemenu text-end pe-3" onClick={menuIconClick}>
          {menuCollapse ? <FiArrowRight /> : <FiArrowLeft />}
        </div>
      </SidebarHeader>

      <div
        className="mt-2 pt-1 h-100 overflow-auto ms-3 d-block "
        id="sideNavBtn"
      >
        <NavLink to="/dashboard" className="text-decoration-none ">
          {" "}
          <Button
            className="d-flex w-100 mt-2 py-2"
            variant="white"
            id="sideBarBtn"
          >
            {menuCollapse ? (
              <div className="">
                <i className="material-icons me-4">dashboard</i>
              </div>
            ) : (
              <>
                <div className="">
                  <i className="material-icons me-3">dashboard</i>
                </div>
                Dashboard
              </>
            )}
          </Button>{" "}
        </NavLink>


        <NavLink
          to="#"
          className="text-decoration-none btn-group dropend w-100 
         overflow-visible d-flex "
        >
          {" "}
          <Dropdown className=" d-flex w-100 overflow-visible " id='sideNavDropdown'>
            <Dropdown.Toggle variant="" id="dropdown-basic" className=" overflow-hidden">
              <div
                className="d-flex w-100 dropdown-toggle align-items-center dropdownSingleBtn"
                id="sideBarBtn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons ">bookmark</span>
                  </div>
                ) : (
                  <div className="d-flex w-100 overflow-hidden">
                    <div>
                      <span className="material-icons me-3">bookmark</span>
                    </div>
                    Course
                  </div>
                )}
              </div>{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu className=" bg-secondary"  id='Dropdownbody'>

                  {dropdown.map((drop,key)=>{
                    return(
                      <Dropdown.Item href="#/action-1" key={key} ><Link to='courses' className='text-warning py-2 text-decoration-none'>{drop.titel.slice(0,25)}</Link></Dropdown.Item>
                    )
                  })}
             <Link to="getCourse" type='button' className="ms-3 bg-dark px-2 py-1 text-decoration-none text-secondary">Add Course +</Link>

            </Dropdown.Menu>

          </Dropdown>
        </NavLink>
        



        
        <NavLink to="/dashboard/event" className="text-decoration-none">
          <Button
            className="d-flex w-100 mt-2 py-2"
            id="sideBarBtn"
            variant="white"
          >
            {menuCollapse ? (
              <div className="">
                <span className="material-icons">event</span>
              </div>
            ) : (
              <>
                <div className="">
                  <span className="material-icons me-3">event</span>
                </div>
                Event
              </>
            )}
          </Button>{" "}
        </NavLink>
        <NavLink to="/dashboard/Inbox" className="text-decoration-none">
          <Button
            className="d-flex w-100 mt-2 py-2"
            id="sideBarBtn"
            variant="warning"
          >
            {menuCollapse ? (
              <div className="">
                <span className="material-icons">move_to_inbox</span>
              </div>
            ) : (
              <>
                <div className="">
                  <span className="material-icons me-3">move_to_inbox</span>
                </div>
                Assessments
              </>
            )}
          </Button>{" "}
        </NavLink>
        <NavLink to="/dashboard/resources" className="text-decoration-none">
          <Button
            className="d-flex w-100 mt-2 py-2"
            id="sideBarBtn"
            variant="primary"
          >
            {menuCollapse ? (
              <div className="">
                <span className="material-icons">library_books</span>
              </div>
            ) : (
              <>
                <div className="">
                  <span className="material-icons me-3">library_books</span>
                </div>
                Resources
              </>
            )}
          </Button>{" "}
        </NavLink>
        <h6
          className="w-100  text-center overflow-hidden"
          id="acountDetailTx"
          variant="white"
        >
          Acount Detial
        </h6>{" "}
        <NavLink to="/dashboard/profile" className="text-decoration-none">
          <Button
            className="d-flex w-100 mt-2 py-2"
            id="sideBarBtn"
            variant="success"
          >
            {menuCollapse ? (
              <div className="">
                <span className="material-icons">account_circle</span>
              </div>
            ) : (
              <>
                <div className="">
                  <span className="material-icons me-3">account_circle</span>
                </div>
                Profile
              </>
            )}
          </Button>{" "}
        </NavLink>
        <NavLink
          to="/dashboard/help"
          className="text-decoration-none bg-transparent"
        >
          <Button
            className="d-flex w-100 mt-2 py-2"
            id="sideBarBtn"
            variant="warning"
          >
            {menuCollapse ? (
              <div className="">
                <span className="material-icons">help</span>
              </div>
            ) : (
              <>
                <div className="">
                  <span className="material-icons me-3">help</span>
                </div>
                Help
              </>
            )}
          </Button>{" "}
        </NavLink>
        <div className="mt-5 mb-5">
          <NavLink
            to="/dashboard/help"
            className="text-decoration-none bg-transparent "
          >
            <Button
              className="d-flex w-100 mt-3 py-2"
              id="sideBarBtn"
              variant="warning"
            >
              {menuCollapse ? (
                <div className="">
                  <span className="material-icons">settings</span>
                </div>
              ) : (
                <>
                  <div className="">
                    <span className="material-icons me-3">settings</span>
                  </div>
                  Setting
                </>
              )}
            </Button>{" "}
          </NavLink>
          <NavLink to="/" className="text-decoration-none bg-transparent">
            <Button
              className="d-flex w-100 mt-2 py-2 mb-5"
              id="sideBarBtn"
              variant="warning"
            >
              {menuCollapse ? (
                <div className="">
                  <span className="material-icons">logout</span>
                </div>
              ) : (
                <>
                  <span className="material-icons me-3 text-white">logout</span>
                  Log out
                </>
              )}
            </Button>{" "}
          </NavLink>
        </div>
      </div>
    </ProSidebar>
  );
};

export default SideNav;
