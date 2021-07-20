import React, { useState } from "react";
import { Row, Col } from "antd";
import { useRecoilValue } from "recoil";
import { getPlanById, getProccessById } from "../../recoil/selectors/index";
import DetailProcess from "./DetailProcess";
import DetailPlan from "./DetailPlan";

const Process = () => {
  const [current, setCurrent] = useState(1);
  const obj = useRecoilValue(getProccessById);
  const { process, plan } = obj;
  const handleChange = (current) => {
    setCurrent(current);
  };
  return (
    <Row>
      <Col span={8} offset={3} style={{ textAlign: "center" }}>
        {process.length > 0 ? (
          <DetailProcess
            current={current}
            handleChange={handleChange}
            name={process[0]?.name}
            step={process[0]?.step}
          />
        ) : (
          <h1>no data</h1>
        )}
      </Col>
      <Col span={8} offset={2}>
        {plan.length > 0 ? <DetailPlan name={plan[0].name} /> : <h1>nodata</h1>}
      </Col>
    </Row>
  );
};

export default Process;
