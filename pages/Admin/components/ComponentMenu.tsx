import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import React from "react";

const { SubMenu } = Menu;

class ComponentMenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default ComponentMenu;
