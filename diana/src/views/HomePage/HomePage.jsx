import React, { useState, useEffect } from "react";
import { Layout, Row, Card } from "antd";
import "antd/dist/reset.css";
import Web3 from "web3";

import "./HomePage.css";

import CardCompanies from "../../components/CardCompanies/CardCompanies";

const { Header } = Layout;

const HomePage = () => {
  return (
    <>
      <Row justify='center'>
        <Card className="principal-card" style={{height: '50vh'}}>
          <div className="hello">
            <h1>Olá, Luana Parra!</h1>
          </div>
          <div className="carbono">
            <h2>Nível de carbono</h2>
          </div>
        </Card>
      </Row>
      <Row gutter={16} justify='center' style={{paddingLeft: '5%', paddingRight: '5%'}}>
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
