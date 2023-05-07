import React from "react";
import { Form, Input, Button, Checkbox,Card } from "antd";
import { useState } from "react";
import 'antd/dist/reset.css';
import "./SignUpPage.css";

function SignUp() {
  const [empresa, setEmpresa] = useState("");
  const [area, setArea] = useState("");
  const [descricao, setDescricao] = useState("");
  

  // const handleSubmit = (event) => {
  //   console.log('na funcao')
  //   console.log({empresa: empresa, area: area, descricao: descricao})
  //   axios
  //    .post("https://localhost:5000/signup/create", {empresa: empresa, area: area, descricao: descricao})
  //    .then((response) => {
  //       console.log(response.data);
  //       alert("ebaaa");
  //    })
  //    .catch((error) => {
  //    });
  // };

  return (
    <div className="signup-page-container">
      <Card className="signup-card" bordered={false}>
        <div className="signup">
          <h1>Cadastro</h1>
        </div>

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
        >
          <Form.Item className="label"
            label="Empresa Física ou Empresa"
            name="empresa"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input className="input" value={empresa} onChange={(e) => setEmpresa(e.target.value)}/>
          </Form.Item>

          <Form.Item className="label"
            label="Área de atuação"
            name="area"
            rules={[
              {
                required: true,
                message: "Please input your area!",
              },
            ]}
          >
            <Input className="input" value={area} onChange={(e) => setArea(e.target.value)}/>
          </Form.Item>

          <Form.Item className="label"
            label="Descrição"
            name="descricao"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input className="input" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
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
          <Form.Item>
            <Button type="primary" htmlType="submit"> 
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default SignUp;
