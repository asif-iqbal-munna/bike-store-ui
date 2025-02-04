import { ConfigProvider } from "antd";
import { Button, Typography } from "antd";

function App() {
  const theme = {
    token: {
      colorPrimary: "#67a183",
      colorText: "#070707",
      colorBgBase: "#f4f7f5",
      colorSuccess: "#78cda2",
      colorWarning: "#a1d2b9",
      borderRadius: 6,
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <div
        style={{
          background: theme.token.colorBgBase,
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Typography.Title level={2} style={{ color: theme.token.colorText }}>
          Welcome to Ant Design Themed App
        </Typography.Title>
        <Button type="primary">Click Me</Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
