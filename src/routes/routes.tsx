import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Dashboard from "../pages/dashboard";
import ManageUsers from "../pages/dashboard/users";
import ManageProducts from "../pages/dashboard/products";
import ManageOrders from "../pages/dashboard/orders";
import AuthGuard from "../components/common/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <h1>Products</h1>,
      },
      {
        path: "/dashboard",
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
        children: [
          {
            path: "users",
            element: <ManageUsers />,
          },
          {
            path: "products",
            element: <ManageProducts />,
          },
          {
            path: "orders",
            element: <ManageOrders />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);

export default router;
