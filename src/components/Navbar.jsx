import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/logos.png";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-padding">
          <Container fluid>
            <Navbar.Brand
              href="/"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={logo}
                alt=""
                width="80"
                height="80"
                className="d-inline-block align-text-top"
              />
              <p className="logo-name">KNILA</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  KNILA IT SOLUTION
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="menu-items">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/" className="menu-items">
                    Services
                  </Nav.Link>

                  <Nav.Link href="/" className="menu-items">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="/" className="menu-items">
                    Contact
                  </Nav.Link>
                  <Link to="/employee" className="text-decoration-none">
                    {" "}
                    <div class="d-flex justify-content-center align-items-center border-1   details">
                      <button
                        type="button"
                        class="employee-button p-2 d-flex justify-content-center align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1733_164)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.59835 11.5984C2.30161 10.8951 3.25544 10.5 4.25 10.5H9.5C10.4946 10.5 11.4484 10.8951 12.1517 11.5984C12.8549 12.3016 13.25 13.2554 13.25 14.25V15.75C13.25 16.1642 12.9142 16.5 12.5 16.5C12.0858 16.5 11.75 16.1642 11.75 15.75V14.25C11.75 13.6533 11.5129 13.081 11.091 12.659C10.669 12.2371 10.0967 12 9.5 12H4.25C3.65326 12 3.08097 12.2371 2.65901 12.659C2.23705 13.081 2 13.6533 2 14.25V15.75C2 16.1642 1.66421 16.5 1.25 16.5C0.835786 16.5 0.5 16.1642 0.5 15.75V14.25C0.5 13.2554 0.895088 12.3016 1.59835 11.5984Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.875 3C5.63236 3 4.625 4.00736 4.625 5.25C4.625 6.49264 5.63236 7.5 6.875 7.5C8.11764 7.5 9.125 6.49264 9.125 5.25C9.125 4.00736 8.11764 3 6.875 3ZM3.125 5.25C3.125 3.17893 4.80393 1.5 6.875 1.5C8.94607 1.5 10.625 3.17893 10.625 5.25C10.625 7.32107 8.94607 9 6.875 9C4.80393 9 3.125 7.32107 3.125 5.25Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.5 5.25C15.9142 5.25 16.25 5.58579 16.25 6V10.5C16.25 10.9142 15.9142 11.25 15.5 11.25C15.0858 11.25 14.75 10.9142 14.75 10.5V6C14.75 5.58579 15.0858 5.25 15.5 5.25Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5 8.25C12.5 7.83579 12.8358 7.5 13.25 7.5H17.75C18.1642 7.5 18.5 7.83579 18.5 8.25C18.5 8.66421 18.1642 9 17.75 9H13.25C12.8358 9 12.5 8.66421 12.5 8.25Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1733_164">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Employee Details
                      </button>
                    </div>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigationbar;
