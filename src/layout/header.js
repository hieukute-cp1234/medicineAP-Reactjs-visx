import React from 'react';
import './layout.css';
import { Layout, Row, Col } from 'antd';
import Button from '../component/Button';
import { useHistory } from 'react-router-dom';
import { RollbackOutlined, MenuOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const { Header } = Layout;

const HeaderComponent = (props) => {
  const { click } = props;
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <Header style={{ padding: '0 30px' }} className="site-layout-background" >
        <Row width='100%'>
          <Col span={8} style={{ textAlign: 'left' }}>
            <MenuOutlined onClick={click} style={{ fontSize: '25px' }} />
          </Col>
          <Col span={8}>
            <h1>
              APP QUẢN LÝ NHÀ MÁY DƯỢC PHẨM
            </h1>
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <Button
              title="Back"
              icon={<RollbackOutlined />}
              onClick={goBack}
            />
          </Col>
        </Row>
      </Header>
    </>
  )
}

HeaderComponent.propTypes = {
  click: PropTypes.func
}

export default React.memo(HeaderComponent);
