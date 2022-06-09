import React, { useRef, useState } from 'react';
import './Login.css';
import bg from '../../images/login-bg.png';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    // integration of react hooks here
    const [showLoading, setShowLoading] = useState(false);
    const fromRef = useRef();

    // integration of ant design hooks here
    const [form] = Form.useForm();
    const emailValue = Form.useWatch('email', form);
    const passValue = Form.useWatch('password', form);

    // event handler for login button
    const handleLogin = async () => {
        setShowLoading(true);

        const email = emailValue;
        const password = passValue;

        const user = { email, password };

        try {

            const { data } = await axios.post('https://reqres.in/api/login', user);

            if (data.token) {
                toast.success('Logged In Successfully!!!');
            }

        } catch (error) {
            toast.error('User Not Found!!!');
        }

        fromRef.current.resetFields();
        setShowLoading(false);
    }

    // rendering login component here
    return (
        <section className='login'>
            <div className='form-container'>
                <h1 className='form-title'>Welcome Back</h1>
                <p className='form-text'>Sub-title text goes here</p>
                <div className='form-wrapper'>
                    <Form
                        onFinish={handleLogin}
                        form={form}
                        ref={fromRef}
                        name='loginForm'
                    >
                        <Form.Item name='email'>
                            <Input className='input' placeholder='Email Address *' type='email' required />
                        </Form.Item>
                        <Form.Item name='password'>
                            <Input className='input' placeholder='Password *' type='password' required />
                        </Form.Item>
                        <Form.Item className='form-login-btn-container'>
                            <Button htmlType='submit' className='form-login-btn btn' type='primary' size='large' block>Login</Button>
                        </Form.Item>
                    </Form>
                    <div className='form-footer'>
                        <Checkbox className='form-footer-text'>Remember Password</Checkbox>
                        <Button className='form-footer-text forgot-btn' type="link">Forgot Password?</Button>
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <img src={bg} alt="login bg" />
            </div>
            <div className={`spinner-wrapper ${showLoading ? 'visible' : 'hidden'}`}>
                <div className='spinner-container'>
                    <Spin className='loading-spinner' size='large' />
                </div>
            </div>
        </section>
    );
};

export default Login;