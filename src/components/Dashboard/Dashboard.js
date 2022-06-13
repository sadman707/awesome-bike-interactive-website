import React from 'react';
import { useEffect, useState } from "react";
import './Dashboard.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyBookings from "./../MyBookings/MyBookings";
import Review from '../Review/Review';
import Admin from "./../Admin/Admin";
import AddService from "./../AddService/AddService";
import ManageOrder from "./../ManageOrder/ManageOrder";
import useFirebase from "./../../Hooks/useFirebase";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const [admin, setAdmin] = useState(false);
    const { user } = useFirebase();
    useEffect(() => {
        fetch(`https://shrouded-hamlet-54967.herokuapp.com/adminCheck/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setAdmin(true);
                }
                else {
                    setAdmin(false);
                }
            })
    }, [user?.email]);
    console.log(admin);
    return (
        <div>
            <div className="dashboard-container m-1">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h4>Here is Dashboard</h4>

                            <Link to={`${url}`}>
                                <li className="dashboard-main-menu mt-4">Bookings</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-main-menu mt-4">Review</li>
                            </Link>
                            <div className="admin-dashboard">
                                <li className="dashboard-menu mt-4">Orders list</li>

                                {admin && <Link to={`${url}/manageOrders`}>
                                    <button className="dashboard-menu btn btn-danger">Manage Service</button>
                                </Link>}

                                <br />
                                {admin && <Link to={`${url}/addService`}>
                                    <button className="dashboard-menu btn btn-dark m-1">Add Service</button>
                                </Link>}
                                <br />
                                {admin && <Link to={`${url}/makingAdmin`}>
                                    <button className="dashboard-menu btn btn-danger">Make Admin</button>
                                </Link>}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyBookings></MyBookings>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/BookingList`}>
                                <MyBookings></MyBookings>
                            </Route>
                            <Route exact path={`${path}/makingAdmin`}>
                                <Admin></Admin>
                            </Route>
                            <Route exact path={`${path}/addService`}>
                                <AddService></AddService>
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                                <ManageOrder></ManageOrder>
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;