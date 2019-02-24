import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class HeaderMenu extends Component {
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  state = {
    current: 'home',
  }

  render() {

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"        
      >
        <Menu.Item key="home">
          <a href="/" rel="noopener noreferrer"><Icon type="home" />Home</a>
        </Menu.Item>
        <Menu.Item key="linkedin">
          <a href="https://www.linkedin.com/in/sahilkhosla/" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" />LinkedIn</a>
        </Menu.Item>
        <Menu.Item key="github">
          <a href="https://github.com/sahilkhosla" target="_blank" rel="noopener noreferrer"><Icon type="github" />Github</a>
        </Menu.Item>
        <Menu.Item key="medium">
          <a href="https://medium.com/@sahilkhosla" target="_blank" rel="noopener noreferrer"><Icon type="medium" />Medium (Blog)</a>
        </Menu.Item>
      </Menu>
    );
  }

}

export default HeaderMenu;
