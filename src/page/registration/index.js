import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { style } from './style';
import { register } from '../../service/auth';
import Background from "../../img/bg2.jpg"

const RegistrationComponent = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    const newArr = {
      email: values.email,
      password: values.password,
    }
    const result = await register(newArr);
    if (result.code === 200) {
      message.success(result.message, 2);
      history.push('/login');
    } else {
      message.error(result.message, 2)
    }
  };

  const goLogin = () => {
    history.push('/login');
  }
  const BgStyle = {
    width: "1365px",
    height: "654px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <Row style={ BgStyle }>
        <Col span={10} offset={7} style={style.wrapper}>
          <h1>Register</h1>
          <Form
            style={style.form}
            {...style.layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...style.tailLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Button type="primary" onClick={goLogin} style={style.buttonLeft}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default RegistrationComponent;