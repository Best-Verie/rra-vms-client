import "./App.css";
import Landing from "./pages/landing";
import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard/dashboard";
import UserContext from "./context/userContext";
import AllVehicles from "./pages/vehicles/AllVehicles";
import AddVehiclePage from "./pages/vehicles/addVehiclePage";
import AddOwnerPage from "./pages/owners/addOwnerPage";
import AllOwnersPage from "./pages/owners/allOwnersPage";

function App() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userFromLocalStorage || null);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <UserContext.Provider
        value={{
          user,
          setUser: login,
          logout: () => setUser(null),
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/addVehicle" element={<AddVehiclePage/>}></Route>
          <Route path="/addOwner" element={<AddOwnerPage/>}></Route>
          <Route path="/owner" element={<AllOwnersPage/>}></Route>
          <Route path="/vehicles" element={<AllVehicles/>}></Route>


        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
