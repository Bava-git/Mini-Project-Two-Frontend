import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('Patient');
    const [selectedOption, setSelectedOption] = useState("option1");
    const Navigate = useNavigate();

    const loginHandler = async () => {

        if (!username || !password) {
            toast.error("Please fullfil the required details");
            return;
        }

        const sendData = { username, password }
        // console.log(sendData);

        try {
            let response = await axios.post("http://localhost:3000/login", sendData, {
                headers: {
                    "Content-type": "Application/json"
                }
            })
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));

                if (response.data.user_role === "PATIENT") {
                    Navigate("/appointment/list");
                } else {
                    Navigate("/doctor/appointment");
                }
                toast.success("Welcome");
            }
        } catch (error) {
            console.log("Login " + error);
        }
    }

    return (
        <div className="loginpage-container">
            <div className="loginpage">
                <h3 className="loginpage-title">Log in</h3>
                <div className="loginpage-field">
                    <label htmlFor="Patient">User Type</label>
                    <div className="field-radios">
                        <div className="field-radio">
                            <input type="radio" name="role" id="Patient" value="option1" checked={selectedOption === "option1"}
                                className="Patient-radio" onChange={(e) => { setUserRole(e.target.id); setSelectedOption("option1"); }} />
                            <label htmlFor="Patient">Patient</label>
                        </div>
                        <div className="field-radio">
                            <input type="radio" name="role" id="Doctor" value="option2" checked={selectedOption === "option2"}
                                className="Doctor-radio" onChange={(e) => { setUserRole(e.target.id); setSelectedOption("option2"); }} />
                            <label htmlFor="Doctor">Doctor</label>
                        </div>
                    </div>
                </div>
                <div className="loginpage-field">
                    {userRole === "Patient" && <label htmlFor="username">Mobile Number:</label>}
                    {userRole === "Doctor" && <label htmlFor="username">Doctor Id:</label>}
                    <input type="text" name="username" id="username" required autoComplete="off"
                        onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="loginpage-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required autoComplete="off"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="loginpage-field">
                    <div></div>
                    <button className="loginBN" onClick={() => loginHandler()}>Login</button>
                </div>
            </div>
        </div >
    )
}

export default Login;