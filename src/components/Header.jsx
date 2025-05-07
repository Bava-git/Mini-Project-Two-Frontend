import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <div className="header-container">
            <div></div>
            <p className="header-title">Mini Project Two</p>

            {token ? (
                <div>
                    <button className="header-bns registerBn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <button className="header-bns loginBn" onClick={() => navigate("/")}>
                        Login
                    </button>
                    <button className="header-bns registerBn" onClick={() => navigate("/patient/modifer")}>
                        Register
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;

