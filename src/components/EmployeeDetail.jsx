import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import donwloading from "../images/download.png";

const EmployeeDetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => res.json())
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Employee Details", 10, 10);
    let y = 20;
    Object.entries(empdata).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 10, y);
      y += 10;
    });
    doc.save("Employee_details.pdf");
  };

  return (
    <div className="container table-top">
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-header">
          <h2>Employee Details</h2>
        </div>
        <div className="card-body">
          {empdata && (
            <div>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Employee Name</td>
                      <td>
                        {empdata.firstname} {empdata.lastname}
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{empdata.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{empdata.phone}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{empdata.city}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{empdata.address}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{empdata.state}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{empdata.country}</td>
                    </tr>
                    <tr>
                      <td>Postcode</td>
                      <td>{empdata.postcode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-3 ">
                <button
                  className="btn btn-success d-flex   gap-2 download-button"
                  onClick={downloadPdf}
                >
                  <img src={donwloading} width={20} height={20} />
                  <p> Download PDF</p>
                </button>
                <Link to="/employee">
                  <button className="btn btn-dark"> Back</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
