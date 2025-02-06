import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";

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
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Toaster />
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
