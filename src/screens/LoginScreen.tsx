import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import sendIcon from "../assets/icons/zondicons/send.svg";

export default function LoginScreen() {
  const navigate = useNavigate();

  const doLogin = () => {
    return navigate("/trip");
  };

  return (
    <div id="login-screen">
      <h1>Group Tripper</h1>
      <h2>We go together</h2>
      <div id="login-form">
        <h3>Login</h3>
        <p>
          <input type="text" name="email" placeholder="Email"></input>
        </p>
        <p>
          <input type="password" name="password" placeholder="Password"></input>
        </p>
        <p>
          <button onClick={doLogin}>
            Login
            <img src={sendIcon} />
          </button>
        </p>
      </div>
    </div>
  );
}
