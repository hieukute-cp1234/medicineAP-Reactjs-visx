import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Table, Tag, Button, Modal, InputNumber } from 'antd';
import * as atom from '../recoil/atom/index';
import { useRecoilValue } from 'recoil'

const WareHouseProduct = () => {
  const [modal, setModal] = useState(false);
  const data = useRecoilValue(atom.getMedicineData);
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      render: id => <p>{id}</p>,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: name => <p>{name}</p>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'amount',
      render: amount => {
        let color
        let text
        if (amount < 20) {
          color = 'volcano';
          text = 'Small quantity'
        } else if (amount > 50) {
          color = 'green';
          text = 'Big quantity'
        } else {
          color = 'geekblue';
          text = 'Sufficient quantity'
        }
        return (
          <Tag color={color} key={amount}>
            {text}
          </Tag>
        )
      },
    },
    {
      title: 'Đặt sản xuất',
      dataIndex: 'id',
      key: 'id',
      render: id => <Button key={id} onClick={showModal}>Sản xuất</Button>,
    },
  ];

  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <Layout>
      <Table columns={columns} dataSource={data} scroll={data.length > 5 ? { y: 362 } : null}/>
      <Modal title="Nhập số lượng sản xuất" visible={modal} onOk={handleOk} onCancel={handleCancel}>
        <InputNumber label="Số lượng:"/>
      </Modal>
    </Layout>
  )
}

export default WareHouseProduct