import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { toast } from "react-toastify";

const EmployeeCreate = () => {
  const [firstname, firstnamechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [city, citychange] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, postcodechange] = useState("");
  const [validation, valchange] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCountry("United States");
    setState("New York");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = {
      firstname,
      lastname,
      email,
      phone,
      address,
      state,
      city,
      postcode,
      country,
    };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        toast.success("Employee Details Added Successfully!");
        navigate("/employee");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container table-top">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Create New Employee Details</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>FirstName</label>
                  <input
                    required
                    value={firstname}
                    onMouseDown={() => valchange(true)}
                    onChange={(e) => firstnamechange(e.target.value)}
                    className="form-control"
                  />
                  {firstname.length === 0 && validation && (
                    <span className="text-danger">Enter the Firstname</span>
                  )}
                </div>
                <div className="form-group">
                  <label>LastName</label>
                  <input
                    required
                    value={lastname}
                    onMouseDown={() => valchange(true)}
                    onChange={(e) => lastnamechange(e.target.value)}
                    className="form-control"
                  />
                  {lastname.length === 0 && validation && (
                    <span className="text-danger">Enter the Lastname</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    required
                    value={email}
                    onMouseDown={() => valchange(true)}
                    onChange={(e) => emailchange(e.target.value)}
                    className="form-control"
                  />
                  {email.length === 0 && validation && (
                    <span className="text-danger">Enter the Email</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    required
                    value={phone}
                    onMouseDown={() => valchange(true)}
                    onChange={(e) => phonechange(e.target.value)}
                    className="form-control"
                  />
                  {phone.length === 0 && validation && (
                    <span className="text-danger">Enter the Mobile Number</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    required
                    value={address}
                    onMouseDown={() => valchange(true)}
                    onChange={(e) => addresschange(e.target.value)}
                    className="form-control"
                  />
                  {address.length === 0 && validation && (
                    <span className="text-danger">Enter the Address</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <RegionDropdown
                    country={country}
                    value={state}
                    onChange={(val) => setState(val)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    required
                    value={city}
                    onChange={(e) => citychange(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    required
                    value={postcode}
                    onChange={(e) => postcodechange(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group d-flex  gap-3">
                  <button
                    className="btn btn-success btn-block mt-3"
                    type="submit"
                  >
                    Save Details
                  </button>
                  <Link to="/employee">
                    <button className="btn btn-dark   btn-block mt-3">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCreate;
