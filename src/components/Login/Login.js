import React from 'react';
import './Login.css';
import bg from '../../images/login-bg.png';
import { Button, Checkbox, Input } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    // event handler for login button
    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const user = { email, password };

        try {

            const { data } = await axios.post('https://reqres.in/api/login', user);

            if (data.token) {
                toast.success('Logged In Successfully!!!');
            }

        } catch (error) {
            toast.error('User Not Found!!!');
        }
    }

    // rendering login component here
    return (
        <section className='login'>
            <div className='form-container'>
                <h1 className='form-title'>Welcome Back</h1>
                <p className='form-text'>Sub-title text goes here</p>
                <div className='form-wrapper'>
                    <form onSubmit={handleLogin}>
                        <Input className='input' name='email' placeholder='Email Address *' type='email' required />
                        <Input className='input' name='password' placeholder='Password *' type='password' required />
                        <Button htmlType='submit' className='form-login-btn btn' type='primary' size='large' block>Login</Button>
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