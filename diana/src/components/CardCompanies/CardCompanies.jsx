import React, { useState } from "react";
import { Card, Col, Row, Typography, Modal, InputNumber, Button, message } from "antd";
import {
  DollarOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import "./CardCompanies.css";
import Web3 from "web3";
import * as ethers from "ethers";
import contractABI from '../../contract/build/contracts/CarbonCreditTrading.json'


const { Title } = Typography;

function CardCompanies({ carbonCredit, logoSrc, cookie }) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleValueChange = (value) => {
    transaction(value);
    setValue(value);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  async function transaction(value){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    //await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const contractAddress = "0x393e8BB52f53Fe9a401615346Cb2eee043cc3EF2"
    //window.ethereum.request({ method: 'eth_requestAccounts' })

    //const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // })
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI.abi,
      signer
    )
  try {
    const tx = await contractInstance.buyCarbonCredits(value);
    await tx.wait();
    console.log('Transação confirmada!');
    success()
  } catch (error) {
    console.log(`Erro ao depositar: ${error.message}`);
  }
}

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <Col span={6}>
        <Card className="companies-card" onClick={showModal}>
          <Row align="bottom" justify="center" style={{ marginTop: "5%" }}>
            <Title
              level={1}
              style={{ fontSize: "36pt", fontFamily: "Poppins" }}
            >
              {carbonCredit}
            </Title>
            <p style={{ marginBottom: 35 }}>[kg]</p>
          </Row>
          <Row align="bottom" justify="center">
            <Title level={4} style={{ fontFamily: "Poppins" }}>
              <DollarOutlined /> {carbonCredit}
            </Title>
            <p>BTGdol</p>
          </Row>
          <Row justify="center">
            <img width={80} src={logoSrc} alt="Company logo" />
          </Row>
        </Card>
      </Col>
      <Modal
        open={visible}
        footer={[
          <Row justify="center">
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Comprar
            </Button>
          </Row>,
        ]}
      >
        <Row justify="center">
          <img width={80} src={logoSrc} alt="Company logo" />
        </Row>
        <Row justify="center">
          <Title
            style={{
              fontFamily: "Poppins",
              fontWeight: 200,
              textAlign: "center",
            }}
            level={2}
          >
            Instituto de Tecnologia e Liderança
          </Title>
        </Row>
        <Row className="carbono" justify="center">
          <Title style={{ fontFamily: "Poppins", fontWeight: 300 }} level={3}>
            Créditos disponíveis para venda:
          </Title>
        </Row>
        <Row align="center" justify="center">
          <Title
            level={1}
            style={{
              fontSize: "80pt",
              fontFamily: "Poppins",
              fontWeight: 300,
              color: "#3f8600",
              marginBottom: 0,
            }}
          >
            <ArrowUpOutlined />
            0,09
          </Title>
        </Row>
        <Row justify="center" align="middle">
          <Title
            level={1}
            style={{
              fontFamily: "Poppins",
              fontWeight: 300,
              color: "rgb(0, 103, 103)",
            }}
          >
            <DollarOutlined />
            5,6 BTGdol
          </Title>
        </Row>
        <Title level={5} style={{ fontFamily: "Poppins", textAlign: "center" }}>
          Qual quantidade de Créditos <br></br> você gostaria de comprar ?
        </Title>
        <Row justify="center">
          <InputNumber
            value={value}
            onChange={handleValueChange}
            style={{ width: 200 }}
          />
        </Row>
      </Modal>
    </>
  );
}

export default CardCompanies;
