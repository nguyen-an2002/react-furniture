import { useState } from "react";
import { useNavigate } from "react-router-dom";

import goyoo from "../assets/Login/fu.png";
import "../styles/Login/Login.css";
import Button from "../components/Button";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "123456") {
            navigate("/");
        } else {
            setError("Sai tài khoản hoặc mật khẩu");
        }
    };

    return (
        <div className="login-page">
            {/* LEFT - FORM */}
            <div className="login-left">
                <div className="login-container">
                    <h1>FURNIRO</h1>
                    <h2>Wellcome to Furniro</h2>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="login-input"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="login-input"
                    />

                    {error && (
                        <p className="login-error">{error}</p>
                    )}

                    <Button
                        label="Đăng nhập"
                        onClick={handleLogin}
                    />

                </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="login-right">
                <img src={goyoo} alt="login visual" />
            </div>
        </div>
    );
};

export default Login;
