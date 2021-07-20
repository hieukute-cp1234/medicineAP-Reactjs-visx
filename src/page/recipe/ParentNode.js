import React from 'react';
import { Group } from '@visx/group';
import { color } from './color';
import PropTypes from 'prop-types';
import { message } from 'antd';

function ParentNode({ node }) {
  const width = 80;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={color.background}
        stroke={color.parentNode}
        strokeWidth={1}
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
        fill={color.text}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

ParentNode.propTypes = {
  node: PropTypes.object,
}

export default ParentNode;