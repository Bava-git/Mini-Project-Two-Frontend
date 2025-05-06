import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponents({ allowedRoles }) {
    const role = JSON.parse(localStorage.getItem("user") || "{}")?.user_role || "";
    return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateComponents;