import React from 'react';
import RootNode from './RootNode';
import ParentNode from './ParentNode';
import { color } from './color';
import { Group } from '@visx/group';
import PropTypes from 'prop-types';
import { message } from 'antd';

function Node({ node }) {
  const width = 100;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;
  if (isParent) return <ParentNode node={node} />;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={color.background}
        stroke={color.node}
        strokeWidth={1}
        strokeDasharray="2,2"
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          message.info(`Quantity in stock: ${node.data.amount}`, 3)
        }}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        fill={color.node}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

Node.propTypes = {
  node: PropTypes.object
}

export default Node;
