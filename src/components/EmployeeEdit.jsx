import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { toast } from "react-toastify";

const EmployeeEdit = () => {
  const { empid } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        firstnamechange(resp.firstname); 
        lastnamechange(resp.lastname);
        emailchange(resp.email);
        phonechange(resp.phone);
        addresschange(resp.address);
        citychange(resp.city);
        setState(resp.state);
        setCountry(resp.country);
        postcodechange(resp.postcode);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

  const handlesubmit = (e) => {
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

    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        toast.success("Employee Details Updated Successfully!");
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
          <form onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Edit Employee Details</h2>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>FirstName</label>
                      <input
                        required
                        value={firstname}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => firstnamechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {firstname.length == 0 && validation && (
                        <span className="text-danger">Enter the Firstname</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>LastName</label>
                      <input
                        required
                        value={lastname}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => lastnamechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {lastname.length == 0 && validation && (
                        <span className="text-danger">Enter the Lastname</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>PhoneNumber</label>
                      <input
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Country</label>
                      <CountryDropdown
                        value={country}
                        onChange={(val) => setCountry(val)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>{" "}
                  <div className="col-lg-12">
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
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        required
                        value={city}
                        onChange={(e) => citychange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input
                        value={postcode}
                        onChange={(e) => postcodechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;
