import React from "react";
import { Layout, Row, Card } from "antd";
import "antd/dist/reset.css";

import "./HomePage.css";

import CardCompanies from "../../components/CardCompanies/CardCompanies";

const { Header } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Header>
        
      </Header>
      <Row>
        <Card className="principal-card">
        <div className="hello">
        <h1>Olá, Luana Parra!</h1>
        </div>
        <div className="carbono">
          <h2>Nível de carbono</h2>
        </div>

        </Card>
      </Row>
      <Row gutter={16}>
    
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
         <CardCompanies value={-0.09} logoSrc={"https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png"}/>
        
      </Row>
    </Layout>
  );
};

export default HomePage;
