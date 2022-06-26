import React, { useRef, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import authApi from '../api/authApi';

function RegisterPage(props) {
    let router = useHistory();
    let [loading, setLoading] = useState(false);
    const formRef = useRef();

    const onFinish = async (values) => {
        try {
            setLoading(true);
            let res = await authApi.register(values);
            if (res) {
                alert("Register success !")
                formRef.current.resetFields();
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            alert("Register fail!");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleGotoLogin = () => {
        router.push("/login")
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
                    ref={formRef}
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
                        name="username"
                        className='login-input'
                        rules={[{ required: true, message: 'Please input your User Name!' }]}
                    >
                        <Input placeholder='User Name' />
                    </Form.Item>

                    <Form.Item
                        name="fullname"
                        className='login-input'
                        rules={[{ required: true, message: 'Please input your Full Name!' }]}
                    >
                        <Input placeholder='Full Name' />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        className='login-input'
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input placeholder='Email' type={"email"} />
                    </Form.Item>

                    <Form.Item
                        className='login-input'
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input type={"password"} placeholder="Password" />
                    </Form.Item>
                    <div className='login-action'>
                        <Form.Item className='login-action-button'>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Register
                            </Button>
                        </Form.Item>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={handleGotoLogin}> Return page Login</div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage;