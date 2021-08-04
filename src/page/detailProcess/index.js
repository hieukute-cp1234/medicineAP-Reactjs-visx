import React, { useState } from "react";
import { Row, Col, Layout, Breadcrumb } from "antd";
import { useRecoilValue } from "recoil";
import { getPlanById, getProccessById } from "../../recoil/selectors/index";
import DetailProcess from "./DetailProcess";
import { style } from "./style";
import { NavLink } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const Process = () => {
  const [current, setCurrent] = useState(1);
  const obj = useRecoilValue(getProccessById);
  const { process, plan } = obj;
  const handleChange = (current) => {
    setCurrent(current);
  };
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <h1 style={style.h1}>Quy Trình sản xuất</h1>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "20px 0 0 20px" }}>
            <NavLink to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </NavLink>
            <Breadcrumb.Item>Công đoạn</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <Row style={style.Row}>
          <Col span={12} offset={6} style={style.Col}>
            {process.length > 0 ? (
              <DetailProcess
                style={style.form}
                current={current}
                handleChange={handleChange}
                name={process[0]?.name}
                step={process[0]?.step}
              />
            ) : (
              <h1>no data</h1>
            )}
          </Col>
        </Row>
        <Footer style={{ textAlign: "center", height: "250px" }}></Footer>
      </Layout>
    </>
  );
};

export default Process;
