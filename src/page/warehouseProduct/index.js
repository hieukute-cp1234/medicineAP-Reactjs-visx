import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { Table, message } from 'antd';
import { medicineData } from '../../recoil/atom/index';
import { useRecoilValue } from 'recoil';
import Modal from './Modal';
import { columns } from './columns';
import { postProductionPlan } from '../../service/productPlan';
import { formatDate } from '../../helpers/date';

const WareHouseProduct = () => {
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState();
  const data = useRecoilValue(medicineData);

  const showModal = (id) => {
    setModal(true);
    setId(id);
  };

  const cancel = () => {
    setModal(false);
  };

  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      medicine: id,
      amount: values.amount,
      duaDate: formatDate(values.duaDate),
      status: 0
    };
    setModal(false);
    const response = postProductionPlan(data);
    response.code === 200 ? message.success(response.message) : message.error(response.message)
  }

  return (
    <Layout>
      <Table
        columns={columns(showModal)}
        dataSource={data}
        scroll={data.length > 5 ? { y: 362 } : null}
      />
      <Modal
        isModal={isModal}
        handleCancel={cancel}
        title="Nhập số lượng sản xuất"
        onFinish={handleSubmit}
      />
    </Layout>
  )
}

export default WareHouseProduct;
