import React from 'react';
import './App.less';
import { Layout } from 'antd';
import Login from './components/Login/Login';
import AToolsHeader from './components/AToolsHeader/AToolsHeader';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className='header'>
        <AToolsHeader />
      </Header>
      <Content>
        <Login />
      </Content>
    </Layout>
  );
}

export default App;
