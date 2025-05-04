import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('');


    const loginHandler = async () => {

        if (!username || !password || !userRole) {
            toast.error("Please fullfil the required details");
            return;
        }

        const sendData = { username, password, userRole }
        console.log(sendData);

        try {
            let response = await axios.post("http://localhost:3000/auth/login", sendData, {
                headers: {
                    "Content-type": "Application/json"
                }
            })
            console.log(response);
            console.log(await response.json());
        } catch (error) {
            console.log("Login " + error);
        }
    }

    return (
        <div className="loginpage-container">
            <div className="loginpage">
                <h3 className="loginpage-title">Log in</h3>
                <div className="loginpage-field">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="loginpage-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="loginpage-field">
                    <label htmlFor="">User Type</label>
                    <div>
                        <input type="radio" name="role" id="Patient" onChange={(e) => { setUserRole(e.target.id) }} />
                        <label htmlFor="Patient">Patient</label>
                        <input type="radio" name="role" id="Doctor" onChange={(e) => { setUserRole(e.target.id) }} />
                        <label htmlFor="Doctor">Doctor</label>
                    </div>
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