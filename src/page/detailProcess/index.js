import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useRecoilValue } from 'recoil';
import { getMedicineById, getProccessById } from '../../recoil/selectors/index';
import DetailProcess from './DetailProcess';


const Process = () => {
  const [current, setCurrent] = useState(1);
  const medicine = useRecoilValue(getMedicineById);
  const process = useRecoilValue(getProccessById);
  console.log(medicine, process);
  const handleChange = (current) => {
    setCurrent(current);
  }
  return (
    <Row>
      <Col span={8} offset={3} style={{ textAlign: 'center' }}>
        <DetailProcess
          current={current}
          handleChange={handleChange}
          name={process[0]?.name}
          step={process[0]?.step}
        />
      </Col>
      <Col span={8} offset={2}>

      </Col>
    </Row>
  )
};

export default Process;
