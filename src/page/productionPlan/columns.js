import Button from "../../component/Button";
import { EditFilled } from "@ant-design/icons";
import { Tag } from "antd";
import { handleStatus } from "../../helpers/handleStatus";
import { colorStatus } from "../../constants/color";

const renderAction = (id, name, edit) => {
  return (
    <span>
      <Button
        type="primary"
        key={id}
        onClick={() => edit(id, name)}
        title="Edit"
        icon={<EditFilled />}
        disabled={name.status === 2 ? true : false}
      />
    </span>
  );
};

const renderTag = (status) => {
  let color;
  switch (status) {
    case 0:
      color = colorStatus.GREEN;
      break;
    case 1:
      color = colorStatus.GEEKBLUE;
      break;
    default:
      color = colorStatus.VOLCANO;
      break;
  }
  return (
    <Tag color={color} key={status}>
      {handleStatus(status)}
    </Tag>
  );
};

export const columns = (edit) => {
  return [
    {
      title: "Name plan",
      dataIndex: "name",
      width: "20%",
      editable: true,
      align: "center",
    },
    {
      title: "Name product",
      dataIndex: "medicine",
      width: "15%",
      editable: true,
      align: "center",
      render: (medicine) => <p>{medicine.name}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "9%",
      editable: true,
      align: "center",
    },
    {
      title: "Dua Date",
      dataIndex: "duaDate",
      width: "20%",
      editable: true,
      align: "center",
      render: (duaDate) => duaDate.slice(0, 10),
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "10%",
      editable: true,
      align: "center",
      render: (status) => renderTag(status),
    },
    {
      title: "Action",
      dataIndex: "_id",
      backgroundColor: "black",
      key: "_id",
      width: "20%",
      align: "center",
      render: (_id, data) => renderAction(_id, data, edit),
    },
  ];
};
