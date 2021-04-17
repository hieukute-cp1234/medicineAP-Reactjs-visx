import React from 'react'
import './layout.css'
import { Layout } from 'antd';


const { Header } = Layout;

const HeaderComponent = () => {

  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }} >
        <h1>
          APP QUẢN LÝ NHÀ MÁY DƯỢC PHẨM
        </h1>
      </Header>
    </>
  )
}

export default HeaderComponent