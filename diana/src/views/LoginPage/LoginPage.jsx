import React, { useState, useEffect } from "react";
import { Card, Form, Input, Button } from "antd";
import 'antd/dist/reset.css';
import "./LoginPage.css";
import Web3 from "web3";

const LoginPage = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page-container">
      <Card className="login-card" bordered={false}>
        <h1>Login</h1>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <div className="login">
              <Metamask/>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

function Metamask(){
  const [address, setAddress] = useState('');

  useEffect(() => {
    const connectToMetamask = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAddress(accounts[0]);
          setTimeout(window.location.href("/home"), 2000)

          
        } catch (error) {
          console.error(error);
        }
      }
    };
    connectToMetamask();
  }, []);
  return (
    <div>
      {address ? (
        <div>
          <p>Connected to MetaMask with address: {address}</p>
        </div>
      ) : (
        <Button type="primary">Connect with MetaMask</Button>
      )}
    </div>
  );
};


export default LoginPage;
