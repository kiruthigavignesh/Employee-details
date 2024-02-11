import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { Tooltip } from "bootstrap";

const Table = () => {
  const [empdata, empdatachange] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          toast.success("Details Removed Successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
      new Tooltip(tooltip);
    });
    return () => {
      tooltips.forEach((tooltip) => {
        const tooltipInstance = Tooltip.getInstance(tooltip);
        if (tooltipInstance) {
          tooltipInstance.dispose();
        }
      });
    };
  }, [empdata]);

  const toggleSortOrder = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedData = empdata
    ? [...empdata].sort((a, b) => {
        const aValue = a[sortField] || "";
        const bValue = b[sortField] || "";
        if (sortOrder === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      })
    : [];

  const getSortIcon = (field) => {
    if (sortField === field) {
      return sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  return (
    <div className="container table-top">
      <div>
        <div className="employee-text d-flex justify-content-between ">
          <h2>Employee Details</h2>
          <div className="divbtn">
            <Link to="/employee/create" className="btn btn-success">
              Add Employee (+)
            </Link>
          </div>
        </div>
        <div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr className="table-row">
                  <th onClick={() => toggleSortOrder("firstname")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p> FirstName</p>
                      <p>{getSortIcon("firstname")}</p>{" "}
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("lastname")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p> LastName</p>
                      <p> {getSortIcon("lastname")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("email")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p> Email </p> <p>{getSortIcon("email")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("phone")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p> PhoneNumber</p> <p> {getSortIcon("phone")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("address")}>
                    <div className="d-flex justify-content-between gap-3">
                      <p> Address</p>
                      <p> {getSortIcon("address")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("city")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p> City </p>
                      <p>{getSortIcon("city")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("state")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p>State </p>
                      <p>{getSortIcon("state")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("country")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p>Country</p>
                      <p> {getSortIcon("country")}</p>
                    </div>
                  </th>
                  <th onClick={() => toggleSortOrder("postcode")}>
                    <div className="d-flex justify-content-between gap-3">
                      {" "}
                      <p> Pincode</p>
                      <p>{getSortIcon("postcode")}</p>
                    </div>
                  </th>

                  <th>Actions</th>
                </tr>
              </thead>
              {empdata && empdata.length > 0 ? (
                <tbody>
                  {sortedData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.country}</td>
                      <td>{item.postcode}</td>
                      <td className="gap-3 d-flex ">
                        <button
                          onClick={() => LoadEdit(item.id)}
                          className="btn btn-success d-flex  justify-content-center align-items-center"
                          data-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Edit!"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => Removefunction(item.id)}
                          className="btn btn-danger  d-flex  justify-content-center align-items-center "
                          data-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Delete!"
                        >
                          <MdDelete />
                        </button>
                        <button
                          onClick={() => LoadDetail(item.id)}
                          className="btn btn-primary  d-flex  justify-content-center align-items-center "
                          data-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="View!"
                        >
                          <IoDocumentText />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="10" className="text-center">
                      No Employee Details Found
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
