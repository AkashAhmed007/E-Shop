import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminPanel from "./components/admin-panel/layout";
import AdminDashboard from "./pages/admin-panel/dashboard";
import AdminFeatures from "./pages/admin-panel/features";
import AdminOrders from "./pages/admin-panel/orders";
import AdminProducts from "./pages/admin-panel/products";
import UserPanel from "./components/user-panel/layout";

import UserHome from "./pages/user-panel/home";
import UserListing from "./pages/user-panel/listing";
import UserCheckout from "./pages/user-panel/checkout";
import UserAccount from "./pages/user-panel/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
// import NotFound from "./pages/not-found";

function App() {
  const isAuthenticated = true;
  const user = {
    name: "akash",
    role: "admin",
  };
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <h1>Header Element</h1>
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminPanel />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        <Route
          path="/user"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <UserPanel />
            </CheckAuth>
          }
        >
          <Route path="home" element={<UserHome />} />
          <Route path="listing" element={<UserListing />} />
          <Route path="checkout" element={<UserCheckout />} />
          <Route path="account" element={<UserAccount />} />
        </Route>
        <Route path="unauth-page" element={<UnauthPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;
