import "./styles/index.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import type { RootState } from "./services/store";

import Login from "./pages/login";
import Layout from "./components/shared/layout";
import Users from "./pages/users";
import UserDetails from "./pages/userDetails";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
      />

      {isLoggedIn && (
        <Route path="/" element={<Layout />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
        </Route>
      )}

      <Route path="*" element={<Navigate to={isLoggedIn ? "/users" : "/"} />} />
    </Routes>
  );
}

export default App;
