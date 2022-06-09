import { Button } from 'antd';
import React from 'react';
import './AToolsHeader.css';

const AToolsHeader = () => {

    // rendering header component here
    return (
        <header>
            <nav>
                <div>
                    <h2 className='header-title'>ATools<span>.</span></h2>
                </div>
                <div className='header-btn-container'>
                    <Button className='trial-btn btn' type='primary' size='large'>Start Free Trial</Button>
                    <Button className='login-btn btn' type='success' size='large'>Login</Button>
                </div>
            </nav>
        </header>
    );
};

export default AToolsHeader;