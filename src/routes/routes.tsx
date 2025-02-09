import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Dashboard from "../pages/dashboard";
import ManageUsers from "../pages/dashboard/users";
import ManageProducts from "../pages/dashboard/products";
import ManageOrders from "../pages/dashboard/orders";
import AuthGuard from "../components/common/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

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
        path: "/user-dashboard",
        element: (
          <AuthGuard role="customer">
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
      {
        path: "/admin-dashboard",
        element: (
          <AuthGuard role="admin">
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
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

export default router;
