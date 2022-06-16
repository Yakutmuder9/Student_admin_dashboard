import { FaBell, FaSistrix } from "react-icons/fa";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../../Auth/firebase/firebase'

const Header = () => {
  const urlLocation = window.location.pathname.substring(1);
  const [user] = useAuthState(auth);
  
let fullName = user.displayName;
let shName = fullName.slice(0, 2);


  function capitalizeFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  const urlLocationCapitalize = capitalizeFirstLetter(`${urlLocation}`);

  return (
    <div className="  sticky-top mt-3  rounded " id="topnavBar">
      <Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        className="d-block d-xl-none  h-auto "
        id="naveToggler"
      >
        <Navbar.Brand href="#home" id="navLogo">
         <span >MyDashboard</span> 
        </Navbar.Brand>

        <Navbar.Toggle
          className="text-top overflow-hidden pt-1 ps-2"
          aria-controls="responsive-navbar-nav"
          id="NavBtnBurger"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-4 bolder">
            <Nav.Link href="/dashboard/">Dashboard</Nav.Link>
            <Nav.Link href="event">Event</Nav.Link>

            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="courses">Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href="courses">React</NavDropdown.Item>
              <NavDropdown.Item href="courses">Node Js</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="courses">
                Web Architecture
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="Inbox">Asessment</Nav.Link>
            <Nav.Link href="resources">Resources</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header
        className="navbar navbar-main d-none d-xl-block navbar-expand-lg  px-3 "
        id="navbar_top"
      >
        <div className=" w-100 d-flex justify-content-between align-items-center">
          <div aria-label="breadcrumb " className="d-lg-block d-none">
            <h5 className="font-weight-bolder text-secondary overflow-hidden">
              {urlLocationCapitalize}
            </h5>
          </div>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end mt-sm-0 mt-2 me-md-0 me-sm-4 w-auto"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-transparent text-white rounded"
                  placeholder="Type here..."
                />
                <span className="input-group-text text-body text-primary bg-secondary">
                  <FaSistrix aria-hidden="true" className="text-white"/>
                </span>
              </div>
            </div>
            <ul className="navbar-nav justify-content-end">
              

              <li className="nav-item px-3 d-flex align-items-center">
                <a href="" className="nav-link text-body p-0">
                  <FaBell className="fa fa-cog cursor-pointer text-white" id="setting" />
                </a>
              </li>
              <div className="d-flex px-3 h-100 align-items-end">
                <span className="text-secondary pt-2">Hi! {shName} 🤚</span>
              </div>
              <div className="h-100">
                <Link to="profile" className="h-100">
                  <img src={user.photoURL} alt="" className="profileImage" />
                </Link>
              </div>
              
                
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
