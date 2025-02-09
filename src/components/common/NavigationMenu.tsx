import type React from "react";
import { useState } from "react";
import { Layout, Menu, Button, Drawer, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import {
  logout,
  useCurrentToken,
} from "../../pages/auth/_libs/redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";

const { Header } = Layout;
const { useToken } = theme;

const NavigationMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { token } = useToken();
  const navigate = useNavigate();

  const tokenState = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(tokenState as string);
  }

  console.log({ user });

  const dispatch = useAppDispatch();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const userDashboard = {
    key: "dashboard",
    label: <NavLink to="/user-dashboard">Dashboard</NavLink>,
  };

  const adminDashboard = {
    key: "dashboard",
    label: <NavLink to="/admin-dashboard">Dashboard</NavLink>,
  };

  const menuItems = [
    {
      key: "home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "products",
      label: <NavLink to="/products">Products</NavLink>,
    },
    {
      key: "about",
      label: <NavLink to="/about">About</NavLink>,
    },
  ];

  if (user?.role === "admin") {
    menuItems.push(adminDashboard);
  } else {
    menuItems.push(userDashboard);
  }

  return (
    <Header style={{ padding: 0, background: token.colorBgContainer }}>
      <div className="navbar-container">
        <div>
          <h1 style={{ fontWeight: "bold", fontStyle: "italic" }}>RIDONIX</h1>
        </div>
        <div className="menu-container">
          <div className="desktop-menu">
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{ flex: 1, justifyContent: "center" }}
            />
          </div>
          <div className="mobile-menu">
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>
        </div>
        <div className="auth-buttons">
          {user ? (
            <Button
              onClick={() => {
                dispatch(logout());
                navigate("/auth/login", { replace: true });
              }}
              type="primary"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                onClick={() => navigate("/auth/login", { replace: true })}
                type="default"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/auth/register", { replace: true })}
                type="primary"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <div>
          <Menu inlineCollapsed={false} mode="vertical" items={menuItems} />
          <div className="">
            <Button
              onClick={() => navigate("/login", { replace: true })}
              type="default"
              style={{ marginRight: "10px" }}
            >
              Login
            </Button>
            <Button type="primary">Register</Button>
          </div>
        </div>
      </Drawer>
    </Header>
  );
};

export default NavigationMenu;
