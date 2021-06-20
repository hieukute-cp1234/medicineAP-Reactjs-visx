import React from 'react';
import { Steps } from 'antd';
import PropTypes from 'prop-types';

const DetailProcess = (props) => {
  const { Step } = Steps;

  const { current, handleChange, name, step } = props;

  return (
    <>
      <h1>{name}</h1>
      <Steps direction="vertical" current={current} onChange={handleChange} style={{ marginLeft: '80px' }}>
        {step.map((item, index) =>
          <Step
            key={index}
            title={item.name}
            description={item.decription}
          />)
        }
      </Steps>
    </>
  )
}

DetailProcess.propTypes = {
  current: PropTypes.number,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  step: PropTypes.array,
}

export default DetailProcess;
