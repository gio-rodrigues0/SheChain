import React from "react";
import { Button, Input, Form } from "antd";
import 'antd/dist/reset.css';
import "./LandingPage.css";

const { Item } = Form;

function LandingPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <h1>Minha Landing Page</h1>
      </div>
      <div className="landing-page-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          dapibus magna. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas.
        </p>
        <Button type="primary" size="large">
          Call to Action
        </Button>
      </div>
      <div className="landing-page-footer">
        <Form onFinish={onFinish} className="newsletter-form">
          <h3>Inscreva-se na nossa newsletter</h3>
          <Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Insira um e-mail válido",
              },
              {
                required: true,
                message: "Insira seu e-mail",
              },
            ]}
          >
            <Input placeholder="Seu e-mail" />
          </Item>
          <Button htmlType="submit" type="primary">
            Inscrever
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LandingPage;
