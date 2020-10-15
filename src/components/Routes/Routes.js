import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../../components/pages/Dashboard/Dashboard/Dashboard";
import CustomerOrder from "../pages/Dashboard/Customers/CustomerOrder/CustomerOrder";
import CustomerServiceList from "../pages/Dashboard/Customers/CustomerServiceList/CustomerServiceList";
import OrdersData from "../pages/Dashboard/Admins/OrdersData/OrdersData";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import AddService from "../pages/Dashboard/Admins/AddService/AddService";
import MakeAdmin from "../pages/Dashboard/Admins/MakeAdmin/MakeAdmin";
import CustomerReview from "../pages/Dashboard/Customers/CustomerReview/CustomerReview";
import SingleCustomerReview from "../pages/Home/SingleCustomerReview/SingleCustomerReview";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/order">
          <CustomerOrder />
        </PrivateRoute>
        <Route path="/customerService" component={CustomerServiceList} />
        <Route path="/allServices" component={OrdersData} />
        <PrivateRoute path="/addReview">
          <CustomerReview />
        </PrivateRoute>
        <Route path="/addService" component={AddService} />
        <Route path="/makeAdmin" component={MakeAdmin} />
        <Route exact path="/" component={Home} />;
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

// <PrivateRoute path="/dashboard/doctors">
//   <Dashboard/>
// </PrivateRoute>
// <PrivateRoute path="/dashboard/appointment">
//   <DashboardAppointmentPage/>
// </PrivateRoute>
// <PrivateRoute path="/dashboard/patients">
//   <Patients/>
// </PrivateRoute>
