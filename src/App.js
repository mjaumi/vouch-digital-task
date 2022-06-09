import React from 'react';
import './App.less';
import { Layout } from 'antd';
import Login from './components/Login/Login';
import AToolsHeader from './components/AToolsHeader/AToolsHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className='header'>
        <AToolsHeader />
      </Header>
      <Content>
        <Login />
        <ToastContainer />
      </Content>
    </Layout>
  );
}

export default App;
