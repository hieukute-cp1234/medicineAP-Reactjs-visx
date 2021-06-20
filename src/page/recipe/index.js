import React, { useMemo } from 'react';
import { Group } from '@visx/group';
import { Tree, hierarchy } from '@visx/hierarchy';
import { HierarchyPointNode } from '@visx/hierarchy/lib/types';
import { LinkHorizontal } from '@visx/shape';
import { LinearGradient } from '@visx/gradient';

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';

export const background = '#272b4d';

const HierarchyNode = HierarchyPointNode;

const rawTree = {
  name: 'T',
  children: [
    {
      name: 'A',
      children: [
        { name: 'A1' },
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
function Node({ node = HierarchyNode }) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;
  if (isRoot)
    return React.createElement(RootNode, { node: node });
  if (isParent)
    return React.createElement(ParentNode, { node: node });
  return (React.createElement(Group, { top: node.x, left: node.y },
    React.createElement("rect", {
      height: height, width: width, y: centerY, x: centerX, fill: background, stroke: green, strokeWidth: 1, strokeDasharray: "2,2", strokeOpacity: 0.6, rx: 10, onClick: () => {
        alert(`clicked: ${JSON.stringify(node.data.name)}`);
      }
    }),
    React.createElement("text", { dy: ".33em", fontSize: 9, fontFamily: "Arial", textAnchor: "middle", fill: green, style: { pointerEvents: 'none' } }, node.data.name)));
}
function RootNode({ node }) {
  return (React.createElement(Group, { top: node.x, left: node.y },
    React.createElement("circle", { r: 12, fill: "url('#lg')" }),
    React.createElement("text", { dy: ".33em", fontSize: 9, fontFamily: "Arial", textAnchor: "middle", style: { pointerEvents: 'none' }, fill: plum }, node.data.name)));
}
function ParentNode({ node }) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  return (React.createElement(Group, { top: node.x, left: node.y },
    React.createElement("rect", {
      height: height, width: width, y: centerY, x: centerX, fill: background, stroke: blue, strokeWidth: 1, onClick: () => {
        alert(`clicked: ${JSON.stringify(node.data.name)}`);
      }
    }),
    React.createElement("text", { dy: ".33em", fontSize: 9, fontFamily: "Arial", textAnchor: "middle", style: { pointerEvents: 'none' }, fill: white }, node.data.name)));
}
const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };
export default function Example({ width, height, margin = defaultMargin }) {
  const data = useMemo(() => hierarchy(rawTree), []);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;
  return width < 10 ? null : (React.createElement("svg", { width: width, height: height },
    React.createElement(LinearGradient, { id: "lg", from: peach, to: pink }),
    React.createElement("rect", { width: width, height: height, rx: 14, fill: background }),
    React.createElement(Tree, { root: data, size: [yMax, xMax] }, tree => (React.createElement(Group, { top: margin.top, left: margin.left },
      tree.links().map((link, i) => (React.createElement(LinkHorizontal, { key: `link-${i}`, data: link, stroke: lightpurple, strokeWidth: "1", fill: "none" }))),
      tree.descendants().map((node, i) => (React.createElement(Node, { key: `node-${i}`, node: node }))))))));
}