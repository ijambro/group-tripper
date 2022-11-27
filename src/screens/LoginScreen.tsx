import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

export default function LoginScreen() {
  const navigate = useNavigate();

  const doLogin = () => {
    return navigate("/");
  };

  return (
    <div id="login-screen">
      <header>
        <div id="logo">
          <img src="/icons8-suitcase-64.png"></img>
          <span id="logo-text">GroupTripper</span>
        </div>
      </header>

      <main>
        <span id="tagline">🧳 We go together 🗺</span>
        <span id="login-form">
          <h3>Login</h3>
          <p>
            <input type="text" name="email" placeholder="Email"></input>
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </p>
          <p>
            <button onClick={doLogin}>Login ➥</button>
          </p>
        </span>
      </main>
    </div>
  );
}
