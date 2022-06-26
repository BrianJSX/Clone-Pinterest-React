import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authApi from '../api/authApi';

function LoginPage(props) {
  let router = useHistory();
  let [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      let res = await authApi.login(values);
      if (res) {
        localStorage.setItem("token", res.accessToken);
        router.push("/");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert("login fail!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">

      <div className="login-content">
        <div className='login-logo'>
          <img
            width={80 + "px"}
            className=""
            src="https://pngimg.com/uploads/pinterest/pinterest_PNG60.png"
            alt="logo"
          />
        </div>
        <Form
          className='login-form'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            className='login-input'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Email' type={"email"} />
          </Form.Item>

          <Form.Item
            className='login-input'
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input type={"password"} placeholder="Password" />
          </Form.Item>
          <div className='login-action'>
            <Form.Item className='login-action-check' name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item className='login-action-button'>
              <Button type="primary" htmlType="submit" loading={loading}>
                Login
              </Button>
            </Form.Item>
          </div>
          <div style={{display: "flex", justifyContent: "center", cursor: "pointer"}} onClick={() => (router.push("/register"))}> Return Page Register</div>
        </Form>
      </div>

    </div>
  );
}

export default LoginPage;
