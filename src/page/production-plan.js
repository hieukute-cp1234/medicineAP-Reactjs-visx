import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import { Table, Popconfirm, Button, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { getProductionPlan } from '../recoil/atom/index';
import { getProductionPlanData } from '../service/api';

const ProductionPlan = () => {

  const [data, setData] = useRecoilState(getProductionPlan);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductionPlanData();
      setData(response);
    }
    fetchData();
  }, [])

  const edit = (id, name) => {
    console.log(id, name);
    setModal(true);
  }

  const handleOk = () => {
    setModal(false);
  }

  const handleCancel = () => {
    setModal(false);
  }

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      width: '6%',
      editable: true,
    },
    {
      title: 'Kế hoạch',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      width: '9%',
      editable: true,
    },
    {
      title: 'Bắt đầu',
      dataIndex: 'startDay',
      width: '15%',
      editable: true,
    },
    {
      title: 'Kết thúc',
      dataIndex: 'endDay',
      width: '15%',
      editable: true,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: '10%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'id',
      key: 'id',
      render: (id, name) => {
        return (
          <span>
            <Button key={id} onClick={() => edit(id, name)}>
              Edit
            </Button>
            <Popconfirm title="Have you sure delete?">
              <Button style={{ marginLeft: 8 }}>
                Delete
              </Button>
            </Popconfirm>
          </span>
        )
      },
    },
  ];

  return (
    <Layout>
      <Table
        scroll={{ y: 362 }}
        columns={columns}
        dataSource={data}
      />
      <Modal
        title="Nhập số lượng sản xuất"
        visible={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        edit
      </Modal>
    </Layout>
  )
}

export default ProductionPlan;