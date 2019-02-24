import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu';
import MainTimeline from './MainTimeline';

//antd imports
import { Layout, Button, Radio, Icon, Row, Col } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="App-header">Sahil Khosla</Header>
          <Content className="App-content">
            <HeaderMenu />
            <div className="App-timeline">
              <MainTimeline />
            </div>
          </Content>
          <Footer>
            Built with <a href="https://reactjs.org/" target="_blank">React</a>
            <img src={logo} className="App-logo" alt="logo" />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
