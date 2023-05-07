import React, { useState } from "react";
import { Card, Col, Row, Typography, Modal, InputNumber } from "antd";
import "./CardCompanies.css";

const { Title } = Typography;

function CardCompanies({ carbonCredit, logoSrc }) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleValueChange = (value) => {
    setValue(value);
  };



  return (
    <>
      <Col span={6}>
        <Card className="companies-card" onClick={showModal}>
          <Row align="bottom">
            <Title>{carbonCredit}</Title>
            <p>[kg]</p>
          </Row>
          <img width={100} src={logoSrc} alt="Company logo" />
        </Card>
      </Col>
      <Modal visible={visible} onCancel={handleCancel}>
        <img width={100} src={logoSrc} alt="Company logo" />
        <Row align="bottom">
          <Title>{value}</Title>
          <p>[kg]</p>
        </Row>
        <InputNumber value={value} onChange={handleValueChange} />
      </Modal>
    </>
  );
}

export default CardCompanies;
