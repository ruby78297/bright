import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Shopinglist.css";

import { Menu, Switch } from "antd";

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Shopinglist extends React.Component {
  state = {};

  changeTheme = (value) => {
    this.setState({});
  };

 

  render() {
    return (
      <div className="filter-main">
        <div className="filter-0">
          <li className="filter-li ">Filter</li>
          <li className="filter-li" id="filter-li-2">
            {" "}
            Clear All
          </li>
        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title="Gender">
            <Menu.Item key="1">Men</Menu.Item>
            <Menu.Item key="2">Unisex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Sizes">
            <Menu.Item key="5">S</Menu.Item>
            <Menu.Item key="6">M</Menu.Item>
            <Menu.Item key="5">L</Menu.Item>
            <Menu.Item key="6">XL</Menu.Item>
            <Menu.Item key="5">XXL</Menu.Item>
            <Menu.Item key="6">XXXL</Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" title="Fit">
            <Menu.Item key="7">Regular</Menu.Item>
            <Menu.Item key="8">Relaxed</Menu.Item>
            <Menu.Item key="8">Relaxed Fit</Menu.Item>
            <Menu.Item key="8">Slim</Menu.Item>
            <Menu.Item key="8">Loose </Menu.Item>
            <Menu.Item key="8">Boxy </Menu.Item>
            <Menu.Item key="8">Regular Fit </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title="Sleeve">
            <Menu.Item key="9">Half Sleeves </Menu.Item>
            <Menu.Item key="10">Short Sleeves</Menu.Item>
            <Menu.Item key="11">Full Sleeves </Menu.Item>
            <Menu.Item key="12">Sleeveless</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title="Neck">
            <Menu.Item key="9">Round Neck </Menu.Item>
            <Menu.Item key="10">Polo</Menu.Item>
            <Menu.Item key="11"> Henley Neck</Menu.Item>
            <Menu.Item key="12">Crew neck</Menu.Item>
            <Menu.Item key="12">Hood</Menu.Item>
            <Menu.Item key="12">Collared</Menu.Item>
            <Menu.Item key="12">V Neck</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Shopinglist;
