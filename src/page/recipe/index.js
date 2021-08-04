import React, { useMemo } from "react";
import { Group } from "@visx/group";
import { Tree, hierarchy } from "@visx/hierarchy";
import { LinkHorizontal } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { color } from "./color";
import { dataTree1, dataTree2, dataTree3 } from "./data";
import Node from "./Node";
import { HelpById } from "../../recoil/atom/index";
import { useRecoilValue } from "recoil";
import { Row, Col, Layout, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

function Recipe({ width = 1350, height = 600, margin = defaultMargin }) {
  const id = useRecoilValue(HelpById);
  const check = (idd) => {
    if (idd === "60d6926b4a70c19367914086") {
      return dataTree3;
    } else if (idd === "60d692db4a70c19367914088") {
      return dataTree2;
    } else {
      return dataTree1;
    }
  };

  const data = useMemo(() => hierarchy(check(id)), []);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return width < 10 ? null : (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <h1 style={{ color: "white" }}>Thành Phần</h1>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "6px 0 5px 20px" }}>
          <NavLink to="/">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </NavLink>
          <Breadcrumb.Item>Thành Phần</Breadcrumb.Item>
        </Breadcrumb>
      </Content>
      <svg width={width} height={height}>
        <LinearGradient
          id="lg"
          from={color.rootNodeFrom}
          to={color.rootNodeTo}
        />
        <rect width={width} height={height} rx={14} fill={color.background} />
        <Tree root={data} size={[yMax, xMax]}>
          {(tree) => (
            <Group top={margin.top} left={margin.left}>
              {tree.links().map((link, i) => (
                <LinkHorizontal
                  key={`link-${i}`}
                  data={link}
                  stroke={color.line}
                  strokeWidth="1"
                  fill="none"
                />
              ))}
              {tree.descendants().map((node, i) => (
                <Node key={`node-${i}`} node={node} />
              ))}
            </Group>
          )}
        </Tree>
      </svg>
    </Layout>
  );
}

export default Recipe;
