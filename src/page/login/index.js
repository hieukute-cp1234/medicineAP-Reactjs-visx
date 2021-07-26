import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { style } from "./style";
import { useHistory } from "react-router-dom";
import { login } from "../../service/auth";
import { messageValidate } from "../../constants/messageValidate";
import Background from "../../img/bg2.jpg";
import { configMessage } from "../../helpers/configResultApi";

const LoginComponent = () => {
  const history = useHistory();

  const onFinish = async (values) => {
    const result = await login(values);
    if (result.code === 200) {
      const { token, name, role, email } = result.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      configMessage(result);
      history.push("/");
    } else {
      configMessage(result);
    }
  };
  const BgStyle = {
    width: "1365px",
    height: "654px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const goRegister = () => {
    history.push("/registration");
  };
  return (
    <Row style={BgStyle}>
      <Col span={10} offset={7} style={style.wrapper}>
        <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
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
            rules={[
              { required: true, message: "Please input your username!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Pass must be minimum 6 characters!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...style.tailLayout} style={{ textAlign: "center" }}>
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
