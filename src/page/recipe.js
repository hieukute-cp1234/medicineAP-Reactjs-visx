import React, { useMemo } from 'react';
import { Group } from '@visx/group';
import { Tree, hierarchy } from '@visx/hierarchy';
import { HierarchyPointNode } from '@visx/hierarchy/lib/types';
import { LinkHorizontal } from '@visx/shape';
import { LinearGradient } from '@visx/gradient';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useRecoilValue  } from 'recoil';
import * as selector from '../recoil/selectors/index';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
export const background = '#272b4d';

const rawTree = {
  name: 'hieukute',
  children: [
    {
      name: 'A',
      children: [
        { name: 'hieukutesdsdsdsdsdsd' },
        { name: 'A2' },
        { name: 'A3' },
        {
          name: 'C',
          children: [
            {
              name: 'C1',
            },
            {
              name: 'D',
              children: [
                {
                  name: 'D1',
                },
                {
                  name: 'D2',
                },
                {
                  name: 'D3',
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Z' },
    {
      name: 'B',
      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
    },
  ],
};

/** Handles rendering Root, Parent, and other Nodes. */
function Node({ node }) {
  console.log(node);
  const width = 100;
  const height = 30;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.element;

  if (isRoot) return <RootNode node={node} />;
  if (isParent) return <ParentNode node={node} />;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={green}
        strokeWidth={1}
        strokeDasharray="2,2"
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy=".33em"
        fontSize={10}
        fontFamily="Arial"
        textAnchor="middle"
        fill={green}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function RootNode({ node }) {
  console.log(node);
  return (
    <Group top={node.x} left={node.y}>
      <circle r={20} fill="url('#lg')" />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={plum}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function ParentNode({ node }) {
  const width = 80;
  const height = 30;
  const centerX = -width / 3;
  const centerY = -height / 2;
  console.log(node.data);
  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={blue}
        strokeWidth={1}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={white}
      >
        {node.data.element.name}
      </text>
    </Group>
  );
}

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

function Example({ width, height, margin = defaultMargin }) {
  const recoil = useRecoilValue(selector.recipeItem);
  const data =  hierarchy(recoil)
  console.log(data)
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="lg" from={peach} to={pink} />
      <rect width={width} height={height} rx={14} fill={background} />
      <Tree root={rawTree} size={[yMax, xMax]}>
        {tree => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => {
              console.log(link)
              return(
                <LinkHorizontal
                  key={`link-${i}`}
                  data={link}
                  stroke={lightpurple}
                  strokeWidth="1"
                  fill="none"
                />
              )
            })}
            {tree.descendants().map((node, i) => {
              console.log(node)
              return (
                <Node key={`node-${i}`} node={node} />
              )
            })}
          </Group>
        )}
      </Tree>
    </svg>
  );
}

export default function Recipe() {
  return (
    <ParentSize>{() => <Example width={1000} height={620} />}</ParentSize>
  )
}