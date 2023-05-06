import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "./CardCompanies.css";

const { Title } = Typography;

const CardCompanies = ({ value, logoSrc }) => {
  return (
    <Col span={6}>
      <Card className="companies-card">
        <Row align="bottom">
        <Title>{value}</Title>
        <p>[kg]</p>
        </Row>
        <img width={100} src={logoSrc} alt="Company logo" />
      </Card>
    </Col>
  );
};

export default CardCompanies;
