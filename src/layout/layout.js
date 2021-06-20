import React, { useState } from 'react';
import HeaderComponent from './Header';
import './layout.css';
import { Layout } from 'antd';
import NavBar from './NavBar';

const LayoutComponent = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Content } = Layout;
  const handleMenu = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout className="site-layout" style={{ minHeight: '100vh' }}>
        <HeaderComponent click={handleMenu} />
        <Layout className="site-layout">
          <NavBar collapsed={collapsed} />
          <Content style={{ margin: '16px 16px 0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default React.memo(LayoutComponent);
