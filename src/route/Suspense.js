import React, { Suspense } from 'react';
import { Skeleton } from 'antd';
import PropTypes from 'prop-types';

const SuspenseComponent = (props) => {
  const { component } = props;
  return (
    <Suspense fallback={<Skeleton />}>
      {component}
    </Suspense>
  )
};

SuspenseComponent.propTypes = {
  component: PropTypes.node
}

export default SuspenseComponent;
