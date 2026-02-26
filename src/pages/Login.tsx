import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";

import goyoo from "../assets/Login/fu.png";
import "../styles/Login/Login.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!username || !password) {
            setError("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        try {
            setError("");
            const user = await loginUser(username, password);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            window.location.reload();
        } catch (err: any) {
            setError(err.message || "Đăng nhập thất bại");
        }
    };


    return (
        <div className="login-page">
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
                    <p style={{ marginTop: 16 }}>
                        Bạn chưa có tài khoản? Bạn có thể{" "}
                        <Link to="/register" style={{ color: "blue" }}>
                            đăng ký tại đây
                        </Link>
                    </p>

                </div>

            </div>

            <div className="login-right">
                <img src={goyoo} alt="login visual" />
            </div>
        </div>
    );
};

export default Login;
