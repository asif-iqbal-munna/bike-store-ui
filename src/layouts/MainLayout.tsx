import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import NavigationMenu from "../components/common/NavigationMenu";
const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <NavigationMenu />
      <Content>
        <Outlet />

        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Content>
    </Layout>
  );
};

export default MainLayout;
