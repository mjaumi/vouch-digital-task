import React from 'react';
import './Login.css';
import bg from '../../images/login-bg.png';
import { Button, Checkbox, Input } from 'antd';

const Login = () => {

    // rendering login component here
    return (
        <section className='login'>
            <div className='form-container'>
                <h1 className='form-title'>Welcome Back</h1>
                <p className='form-text'>Sub-title text goes here</p>
                <div className='form-wrapper'>
                    <form>
                        <Input className='input' placeholder='Email Address *' type='email' required />
                        <Input className='input' placeholder='Password *' type='password' required />
                        <Button className='form-login-btn btn' type='primary' size='large' block>Login</Button>
                    </form>
                    <div className='form-footer'>
                        <Checkbox className='form-footer-text'>Remember Password</Checkbox>
                        <Button className='form-footer-text forgot-btn' type="link">Forgot Password?</Button>
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <img src={bg} alt="login bg" />
            </div>
        </section>
    );
};

export default Login;