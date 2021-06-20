import Button from '../../component/Button';
import { EditFilled, FileTextOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { handleStatus } from '../../helpers/handleStatus';
import { colorStatus } from '../../constants/color';

const renderAction = (id, name, edit, goBack) => {
  return (
    <span>
      <Button
        key={id}
        onClick={() => edit(id, name)}
        title='Edit'
        icon={<EditFilled />}
      />
      <Button
        marginLeft={8}
        title="Detail"
        icon={<FileTextOutlined />}
        onClick={goBack}
      />
    </span>
  )
}

const renderTag = (status) => {
  let color
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
  )
}

export const columns = (edit, goBack) => {
  return [
    {
      title: 'STT',
      dataIndex: 'id',
      width: '6%',
      editable: true,
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
      align: 'center',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: '9%',
      editable: true,
      align: 'center'
    },
    {
      title: 'Dua Date',
      dataIndex: 'duaDate',
      width: '25%',
      editable: true,
      align: 'center',
      render: (duaDate) => duaDate.slice(0, 10)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '10%',
      editable: true,
      align: 'center',
      render: (status) => renderTag(status)
    },
    {
      title: 'Action',
      dataIndex: '_id',
      backgroundColor: 'black',
      key: '_id',
      width: '20%',
      align: 'center',
      render: (_id, name) => renderAction(_id, name, edit, goBack),
    },
  ];
}