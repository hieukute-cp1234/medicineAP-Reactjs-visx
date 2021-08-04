import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { style } from "./style";
import { useHistory } from "react-router-dom";
import { login } from "../../service/auth";
import { messageValidate } from "../../constants/messageValidate";
import Background from "../../img/bg2.jpg"

const LoginComponent = () => {
  const history = useHistory();

  const onFinish = async (values) => {
    const result = await login(values);
    if (result.code === 200) {
      const { token, name, role } = result.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      message.success(result.message, 3);
      history.push("/");
    } else {
      message.error(result.message, 3);
    }
  };
  const BgStyle = {
    width: "1365px",
    height: "654px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  const goRegister = () => {
    history.push("/registration");
  };
  return (
    <Row style={ BgStyle }>
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...style.tailLayout}>
            <Button type="primary" htmlType="submit" style={style.buttonRight}>
              Đăng nhập
            </Button>
            <Button
              type="primary"
              onClick={goRegister}
              style={style.buttonLeft}
            >
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginComponent;
