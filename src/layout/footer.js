import React from 'react'
import {Layout } from 'antd'
import './layout.css'

const { Footer } = Layout;
const FooterComponent = () => {
  return (
    <>
      <Footer style={{ textAlign: 'center' }}>React App</Footer>
    </>
  )
}

export default React.memo(FooterComponent);