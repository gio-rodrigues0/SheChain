import React, { useState } from "react";
import { Card, Col, Row, Typography, Modal, InputNumber } from "antd";
import { DollarOutlined } from '@ant-design/icons';
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
          <Row align="bottom" justify='center' style={{marginTop: '5%'}}>
            <Title level={1} style={{fontSize:'36pt', fontFamily: 'Poppins'}}>{carbonCredit}</Title>
            <p style={{marginBottom:35}}>[kg]</p>
          </Row>
          <Row align="bottom" justify='center'>
          <DollarOutlined />
            <Title level={4} style={{fontFamily: 'Poppins'}}>{carbonCredit}</Title>
            <p>BTGdol</p>
          </Row>
          <Row justify='center'>
            <img width={80} src={logoSrc} alt="Company logo" />
          </Row>
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
