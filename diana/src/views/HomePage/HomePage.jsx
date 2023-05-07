import React, { useState, useEffect } from "react";
import { Layout, Row, Card, Typography, Col, Space, Statistic } from "antd";
import {
  DollarOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import Web3 from "web3";

import "./HomePage.css";

import CardCompanies from "../../components/CardCompanies/CardCompanies";

const { Title } = Typography;
const { Header } = Layout;

const HomePage = () => {
  return (
    <>
      <Row justify="center">
        <Card className="principal-card" style={{ height: "52vh" }}>
          <Row align="middle">
            <Col offset={1} span={13}>
              <Space direction="vertical" size={0.1}>
                <Row className="hello" justify="start">
                  <Title
                    style={{ fontFamily: "Poppins", fontWeight: 200 }}
                    level={2}
                  >
                    Olá, Luana Parra!
                  </Title>
                </Row>
                <Row className="carbono" justify="start">
                  <Title
                    style={{ fontFamily: "Poppins", fontWeight: 300 }}
                    level={3}
                  >
                    Atual nível de Créditos de Carbono
                  </Title>
                </Row>
                <Row align="center" justify="start">
                  <Title
                    level={1}
                    style={{
                      fontSize: "80pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "grey",
                      marginBottom: 0,
                    }}
                  >
                    0,09
                  </Title>
                  <Title
                    level={3}
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 200,
                      color: "grey",
                    }}
                  >
                    Toneladas de <br></br>Crédito de Carbono
                  </Title>
                </Row>
                <Row justify="start" align="middle">
                  <Title
                    level={1}
                    style={{ fontFamily: "Poppins", fontWeight: 300 }}
                  >
                    <DollarOutlined />
                    <strong> 5,6</strong> BTGdol
                  </Title>
                </Row>
              </Space>
            </Col>
            <Col>
              <Row>
                <Card bordered={false}>
                  <Statistic
                    title="Créditos Vendidos"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>

                <Card bordered={false}>
                  <Statistic
                    title="Créditos Comprados"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Row>
              <Row>
                <iframe
                  style={{
                    aspectRatio: "1200 / 630",
                    width: "100%",
                    height: "fit-content",
                  }}
                  src="https://www.coindesk.com/embedded-chart/MQJr9mPJ6rDPR"
                  width="100%"
                  frameBorder="0"
                />
              </Row>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row justify='center'>
        <Title style={{ fontFamily: "Poppins", fontWeight: 200, color:'white' }} >Empresas Disponíveis para Negociação</Title>
      </Row>
      <Row
        gutter={16}
        justify="center"
        style={{ paddingLeft: "9.5%", paddingRight: "5%" }}
      >
        <CardCompanies
          carbonCredit={-0.09}
          logoSrc={
            "https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"
          }
        />
        <CardCompanies
          carbonCredit={-0.09}
          logoSrc={
            "https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"
          }
        />
        <CardCompanies
          carbonCredit={-0.09}
          logoSrc={
            "https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"
          }
        />
        <CardCompanies
          carbonCredit={-0.09}
          logoSrc={
            "https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"
          }
        />
      </Row>
    </>
  );
};

export default HomePage;
