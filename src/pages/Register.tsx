import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/auth";

import goyoo from "../assets/Login/fu.png";
import "../styles/Register/Register.css";
import Button from "../components/Button";

const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleRegister = async () => {
        const trimmedName = name.trim();
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();

        if (!trimmedName || !trimmedUsername || !trimmedPassword) {
            setError("Vui lòng nhập đầy đủ thông tin");
            setSuccess("");
            return;
        }

        if (/\s/.test(trimmedUsername)) {
            setError("Username không được chứa dấu cách");
            setSuccess("");
            return;
        }

        if (trimmedUsername.length < 8) {
            setError("Username phải có ít nhất 8 ký tự");
            setSuccess("");
            return;
        }

        if (/\s/.test(trimmedPassword)) {
            setError("Mật khẩu không được chứa dấu cách");
            setSuccess("");
            return;
        }

        if (trimmedPassword.length < 8) {
            setError("Mật khẩu phải có ít nhất 8 ký tự");
            setSuccess("");
            return;
        }

        try {
            setError("");
            setSuccess("");
            await registerUser(trimmedName, trimmedUsername, trimmedPassword);

            setSuccess(" Đăng ký thành công");
        } catch (err: any) {
            setError(err.message || "Đăng ký thất bại");
            setSuccess("");

        }

    };



    return (
        <div className="register-page">
            {/* LEFT - FORM */}
            <div className="register-left">
                <div className="register-container">
                    <h1>FURNIRO</h1>
                    <h2>Create your account</h2>

                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="register-input"
                    />

                    <input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="register-input"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                    />

                    {error && <p className="register-error">{error}</p>}

                    <Button
                        label="Đăng ký"
                        onClick={handleRegister}
                    />
                    {success && <p className="register-success" style={{ color: "green" }}>{success}</p>}
                    <p style={{ marginTop: 16 }}>
                        Bạn đã có tài khoản? Bạn có thể{" "}
                        <Link to="/login" style={{ color: "blue" }}>
                            đăng nhập tại đây
                        </Link>

                    </p>
                </div>
            </div>

            <div className="register-right">
                <img src={goyoo} alt="register visual" />
            </div>
        </div>
    );
};

export default Register;
