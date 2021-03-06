import React from "react";
import { Layout, Menu } from "antd";
import {
  DropboxOutlined,
  HomeOutlined,
  FileProtectOutlined,
  ToolOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { role } from "../constants/role";

const NavBar = (props) => {
  const { collapsed } = props;

  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { pathname } = useLocation();

  const roleUser = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const isRoleUser = Number(roleUser) === role.USER;
  const isRoleAdmin = Number(roleUser) === role.ADMIN;

  return (
    <Sider collapsed={collapsed}>
      <Menu theme="dark" defaultSelectedKeys={pathname} mode="inline">
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        {token && (
          <Menu.Item key="/order" icon={<ShoppingCartOutlined />}>
            <NavLink to="/order">Order</NavLink>
          </Menu.Item>
        )}
        {isRoleUser && (
          <>
            <Menu.Item key="/profile" icon={<ToolOutlined />}>
              <NavLink to="/profile">profile</NavLink>
            </Menu.Item>
          </>
        )}
        {isRoleAdmin && (
          <>
            <Menu.Item key="/production-plan" icon={<FileProtectOutlined />}>
              <NavLink to="/production-plan">Production plan</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<DropboxOutlined />} title="Ware house">
              <Menu.Item key="/ware-house-product">
                <NavLink to="/ware-house-product">Medicine</NavLink>
              </Menu.Item>
              <Menu.Item key="/ware-house-ingredient">
                <NavLink to="/ware-house-ingredient">Element</NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/create-process" icon={<ToolOutlined />}>
              <NavLink to="/create-process">Create process</NavLink>
            </Menu.Item>
          </>
        )}
        {roleUser === null && ""}
      </Menu>
    </Sider>
  );
};

export default React.memo(NavBar);
