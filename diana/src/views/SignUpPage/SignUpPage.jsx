import React from "react";
import { Form, Input, Button, Checkbox,Card } from "antd";
import 'antd/dist/reset.css';
import "./SignUpPage.css";

function SignUpPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signup-page-container">
      <Card className="signup-card" bordered={false}>
        <div classname="signup">
          <h1>Cadastro</h1>
        </div>

        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
        >
          <Form.Item className="label"
            label="Empresa Física ou Empresa"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input className="input"/>
          </Form.Item>

          <Form.Item className="label"
            label="Área de atuação"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your area!",
              },
            ]}
          >
            <Input className="input"/>
          </Form.Item>

          <Form.Item className="label"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input className="input"/>
          </Form.Item>

          <Form.Item className="label"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters!",
              },
            ]}
            
          >
            <Input.Password className="input"/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Lembre-me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="cadastrar">
              Cadastrar
            </Button>
          </Form.Item>

          
        </Form>
      </Card>
    </div>
  );
}

export default SignUpPage;
