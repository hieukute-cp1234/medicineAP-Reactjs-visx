import React, { useState } from 'react';
import HeaderComponent from './header';
import FooterComponent from './footer';
import './layout.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DropboxOutlined,
  HomeOutlined,
  FileProtectOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom'

const LayoutComponent = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const { Content, Sider } = Layout;
  const { SubMenu } = Menu;
  const { pathname } = useLocation()
  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          hieu
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={pathname} mode="inline">
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <NavLink to="/">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/production-plan" icon={<FileProtectOutlined />}>
              <NavLink to="/production-plan">
                Kế hoạch sản xuất
              </NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<DropboxOutlined />} title="Kho">
              <Menu.Item key="/ware-house-product">
                <NavLink to="/ware-house-product">
                  Dược Phẩm
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/ware-house-ingredient">
                <NavLink to="/ware-house-ingredient">
                  Thành phần
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <HeaderComponent />
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Không Sợ Thất Bại - Luôn Luôn Học Hỏi - không Ngừng Thay Đổi</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </>
  )
}

export default React.memo(LayoutComponent)