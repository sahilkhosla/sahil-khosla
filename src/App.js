import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//antd imports
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="App-header">Sahil Khosla</Header>
          <Content className="App-content">{`Hello World!`}</Content>
          <Footer>&nbsp;</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
