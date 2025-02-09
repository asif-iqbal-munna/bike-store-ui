import { Button, Row, Col, Typography } from "antd";

import type React from "react";
import { CountdownTimer } from "./CountdownTimer";

const { Title, Paragraph } = Typography;

export function AppHeader() {
  // Set target date 60 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 60);

  const headerStyle: React.CSSProperties = {
    background: "rgb(34,193,195)",
    backgroundImage:
      "linear-gradient(281deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient(startColorstr='#22c1c3', endColorstr='#fdbb2d', GradientType=1)",
    padding: "48px 24px",
    height: "60vh",
  };

  const timerContainerStyle: React.CSSProperties = {
    display: "inline-block",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "32px",
  };

  const contentStyle: React.CSSProperties = {
    color: "#fff",
  };

  return (
    <header style={headerStyle}>
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Col xs={24} md={12}>
          <div style={contentStyle}>
            <div style={timerContainerStyle}>
              <CountdownTimer targetDate={targetDate} />
            </div>
            <Title level={1} style={{ color: "#fff", marginBottom: "16px" }}>
              Launching New Bike
            </Title>
            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "18px",
                marginBottom: "24px",
              }}
            >
              Get ready for the ultimate riding experience! Our brand-new bike
              is arriving soon with cutting-edge features, superior design, and
              unmatched performance. Stay tuned for the big reveal!
            </Paragraph>
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                size="large"
                style={{
                  minWidth: "120px",
                  background: "#fff",
                  color: "#16a34a",
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </header>
  );
}
