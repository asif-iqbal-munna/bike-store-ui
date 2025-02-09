import { Card, Col, Row } from "antd";
import RegistrationForm from "./_libs/forms/RegistrationForm";
const Register = () => {
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
          <RegistrationForm />
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
