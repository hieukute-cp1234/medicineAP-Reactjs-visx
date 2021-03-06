import { Tag } from "antd";
import Button from "../../component/Button";
import { statusAmount } from "../../constants/status";
import { colorStatus } from "../../constants/color";

export const columns = (showModal, status) => {
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
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "20%",
      render: (name) => <p>{name}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
      width: "15%",
      render: (amount, data) => (
        <p>{`${amount} ${data.status === 1 ? "Box" : "Jar"}`}</p>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "amount",
      align: "center",
      width: "20%",
      render: (amount) => tag(amount),
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      width: "25%",
      render: (_id) => (
        <Button key={_id} onClick={() => showModal(_id)} title="Sản xuất" />
      ),
    },
  ];
};
