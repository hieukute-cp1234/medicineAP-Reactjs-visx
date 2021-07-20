import React from 'react';
import { Group } from '@visx/group';
import { color } from './color';
import PropTypes from 'prop-types';
import { message } from 'antd';

function RootNode({ node }) {
  return (
    <Group top={node.x} left={node.y}>
      <circle
        r={40}
        fill="url('#lg')"
        onClick={() => {
          message.info(`Quantity in stock: ${node.data.amount}`, 3)
        }}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={color.rootNode}
      >
        {node.data.name}
      </text>
    </Group>
  )
};

RootNode.propTypes = {
  node: PropTypes.object
}

export default RootNode;
