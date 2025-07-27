import { useDispatch } from "react-redux";
import Button from "../components/shared/button";
import Input from "../components/shared/input";
import "../styles/pages/login.scss";
import { login } from "../services/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email: "" }));
  };

  return (
    <div className="login">
      <img src="/images/logo.svg" className="login__logo" alt="logo" />

      <div className="login__left">
        <img
          src="/images/login.svg"
          className="login__image"
          alt="illustration"
        />
      </div>

      <div className="login__right">
        <div className="login__form">
          <div style={{ marginBottom: 20 }}>
            <div className="login__header">Welcome!</div>
            <div className="login__header2">Enter details to login.</div>
          </div>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <span className="login__span">FORGOT PASSWORD?</span>
          <Button onClick={handleLogin} style={{ height: 48 }}>
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
