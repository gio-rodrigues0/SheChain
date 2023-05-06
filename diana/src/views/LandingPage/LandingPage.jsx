import React from "react";
import { Button, Input, Form, Image } from "antd";
import 'antd/dist/reset.css';
import "./LandingPage.css";

import logo from '../../imagens/logo.png'
const { Item } = Form;

function LandingPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (



    <div className="landing-page">

   <div className="logo">
 
  </div> 
      <div className="landing-page-header">
      <h1>Diana</h1>
    </div>
  <div className="slogan">
        <h1>Juntos pela sustentabilidade</h1>
        <h1>Impulsionados pelo blockchain</h1>
  </div>
    
      <div className="entrar">
      <Button ghost>entrar</Button>
      </div>
      <div className="cadastrar">
      <Button ghost>cadastrar</Button>
      </div>
      <div className="landing-page-footer">
      </div>
    </div>
  );
}


export default LandingPage;
