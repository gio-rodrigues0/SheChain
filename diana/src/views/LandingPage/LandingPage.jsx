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
    <>
    <div className="header">

      <div className="logo">
        <Image src={logo}></Image>
      </div>

      <Button className="entrar">Entrar</Button>

      <Button className="cadastrar">Cadastrar</Button>

    </div>

    <div className="main">
      <h1>diana</h1>
    </div>

    <div className="slogan">
      <p>Juntos pela <p className="verde">sustentabilidade</p>,impulsionados pelo <p className="verde">blockchain.</p></p>
    </div>

    <div className="landing-page-footer">
    </div>
    </>
  );
}


export default LandingPage;
