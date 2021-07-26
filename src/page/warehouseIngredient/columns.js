import { Tag } from "antd";
import { statusAmount } from "../../constants/status";
import { colorStatus } from "../../constants/color";

const tag = (amount) => {
  let color;
  let text;
  if (amount < 20) {
    color = colorStatus.VOLCANO;
    text = statusAmount.SMALL;
  } else if (amount > 50) {
    color = colorStatus.GREEN;
    text = statusAmount.BIG;
  } else {
    color = colorStatus.GEEKBLUE;
    text = statusAmount.SUFFICIENT;
  }
  return (
    <Tag color={color} key={amount}>
      {text}
    </Tag>
  );
};

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: "33%",
    render: (name) => <p>{name}</p>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    align: "center",
    width: "33%",
    render: (amount, data) => (
      <p>{`${amount} ${data.status === 1 ? "kilogam" : "lit"}`}</p>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "amount",
    align: "center",
    width: "33%",
    render: (amount) => tag(amount),
  },
];
