import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../logo.png';

function Header(props : any) {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const history = useHistory();
    return (
      <div>
        {props.isAuthenticated ? (
          <div className="sidebar-container">
            <div className="sidebar-logo">
              Assignment
  </div>
            {
            <>
            <Navbar.Collapse id="basic-navbar-nav" style={{display:'block'}}>
              <Nav className="flex-column">
                <Nav.Link href="/Home" style={{color:'white'}}>Home</Nav.Link><br></br>
                <Nav.Link href="/Home" style={{color:'white'}}>Dashboard</Nav.Link>
                <NavDropdown title="Manage User" id="basic-nav-dropdown" style={{color:'white'}}>
                  <NavDropdown.Item href="/Userlist">User List</NavDropdown.Item><br></br>
                  <NavDropdown.Item href="/Userlist">User History</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" >Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </>
            }
          </div>
        ) : ""
        }
        <div className="content-container">
  
          <div className="container-fluid">
  
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3" style={{ height: '52px' }}>
                <Navbar.Brand className="font-weight-bold text-muted">
                  <img src={logo} width="100" height="50" alt="Logo" />
                </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Nav activeKey={window.location.pathname}>
                  {props.isAuthenticated ? (
                    <Nav.Link onClick={props.click} style={{color:'black',float:'right',margin:'4px'}}>Logout</Nav.Link>
                  ) : (
                      <>
                          <Nav.Link href="/Signup">Signup</Nav.Link>
                          <Nav.Link href="/Login">Login</Nav.Link>
                          <Nav.Link href="/Login">Forgot Password</Nav.Link>
                      </>
                    )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    )
  }
export default Header;