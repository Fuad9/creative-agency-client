import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../../components/pages/Dashboard/Dashboard/Dashboard";
import CustomerOrder from "../pages/Dashboard/Customers/CustomerOrder/CustomerOrder";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/order/:serviceName" component={CustomerOrder} />
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
