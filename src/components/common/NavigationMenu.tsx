import type React from "react";
import { useState } from "react";
import { Layout, Menu, Button, Drawer, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const { Header } = Layout;
const { useToken } = theme;

const NavigationMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { token } = useToken();
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
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
    {
      key: "dashboard",
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },
  ];

  return (
    <Header style={{ padding: 0, background: token.colorBgContainer }}>
      <div className="navbar-container">
        <div style={{ marginTop: "20px" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "120px", height: "60px" }}
          />
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
