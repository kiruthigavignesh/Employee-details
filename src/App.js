import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Table from "./components/Table";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeDetail from "./components/EmployeeDetail";
import EmployeeEdit from "./components/EmployeeEdit";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/employee" element={<Table />} />
          <Route path="/employee/create" element={<EmployeeCreate />}></Route>
          <Route
            path="/employee/detail/:empid"
            element={<EmployeeDetail />}
          ></Route>
          <Route
            path="/employee/edit/:empid"
            element={<EmployeeEdit />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
