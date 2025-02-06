import { Card, Col, Row } from "antd";
import LoginForm from "./_libs/forms/LoginForm";

const Login = () => {
  return (
    <Row
      gutter={16}
      style={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col span={8}>
        <Card bordered={false}>
          <LoginForm />
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
