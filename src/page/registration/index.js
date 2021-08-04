import React from "react";
import { Form, Input, Button, Row, Col, Result } from "antd";
import { useHistory } from "react-router-dom";
import { style } from "./style";
import { register } from "../../service/auth";
import { postProfile } from "../../service/profile";
import Background from "../../img/bg2.jpg";
import { configMessage } from "../../helpers/configResultApi";

const RegistrationComponent = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    const newAcc = {
      email: values.email,
      password: values.password,
      name: values.name,
      role: 2,
    };
    const newProfile = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company,
      address: values.address,
    };
    const result = await register(newAcc);
    if (result.code === 200) {
      configMessage(Result);
      await postProfile(newProfile);
      history.push("/login");
    } else {
      configMessage(result);
    }
  };

  const goLogin = () => {
    history.push("/login");
  };
  const BgStyle = {
    width: "1365px",
    height: "654px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Row style={BgStyle}>
      <Col span={10} offset={7} style={style.wrapper}>
        <h1 style={{ textAlign: "center" }}>Register</h1>
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
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="In Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
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

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Tele Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone!" },
              { min: 10, message: "phone must be minimum 10 characters!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="The Company"
            name="company"
            rules={[
              { required: true, message: "Please input your the company!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...style.tailLayout} style={{ textAlign: "center" }}>
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
  );
};

export default RegistrationComponent;
