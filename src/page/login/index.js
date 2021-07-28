import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { style } from './style';
import { useHistory } from 'react-router-dom';
import { login } from '../../service/auth';
import { messageValidate } from '../../constants/messageValidate';

const LoginComponent = () => {
  const history = useHistory();

  const onFinish = async (values) => {
    const result = await login(values);
    if (result.code === 200) {
      localStorage.setItem('token', result.data);
      message.success(result.message);
      history.push('/');
    } else {
      message.error(result.message);
    }
  };

  const goRegister = () => {
    history.push('/registration');
  }
  return (
    <Row>
      <Col span={10} offset={7} style={style.wrapper}>
        <h1>Đăng Nhập</h1>
        <Form
          style={style.form}
          {...style.layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          validateMessages={messageValidate}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...style.tailLayout}>
            <Button type="primary" htmlType="submit"style={style.buttonRight}>
              Đăng nhập
            </Button>
            <Button type="primary" onClick={goRegister} style={style.buttonLeft}>
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default LoginComponent;
