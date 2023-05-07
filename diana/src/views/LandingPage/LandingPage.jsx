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

    <div>
      <Button className="entrar">Entrar</Button>
      <Button ghost className="cadastrar">Cadastrar</Button>
      </div>
    </div>
<div className="escrita">
    <div className="main">
      <p>diana</p>
    </div>

    <div className="slogan">
      <p>Juntos pela sustentabilidade</p>
      <p>Impulsionados pelo blockchain</p>
    </div>
    </div>
    <div className="landing-page-footer">
    </div>
    </>
  );
}


export default LandingPage;
