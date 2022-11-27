import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginScreen from "./screens/LoginScreen";
import TripScreen from "./screens/TripScreen";

function App() {
  console.log("Rendering App");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route element={<Layout />}>
          <Route index element={<TripScreen />} />
          <Route path="trip" element={<TripScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
