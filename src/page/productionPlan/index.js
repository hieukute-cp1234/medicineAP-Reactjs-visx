import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import { Table } from "antd";
import { useRecoilState } from "recoil";
import { productionPlan } from "../../recoil/atom/index";
import { columns } from "./columns";
import Modal from "./Modal";
import { formatDate } from "../../helpers/date";
import {
  putProductionPlan,
  getProductionPlanData,
} from "../../service/productPlan";
import { configResult, configMessage } from "../../helpers/configResultApi";

const ProductionPlan = () => {
  const [dataPlan, setDataPlan] = useRecoilState(productionPlan);
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState({
    idPlan: "",
    idMedicine: "",
  });
  const [idPlan, setIdpLan] = useState();
  const [dataItem, setDataItem] = useState({
    name: "hieu1",
    amount: 20,
    duaDate: "2021-07-19",
    status: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductionPlanData();
      const data = configResult(response);
      setDataPlan(data);
    };
    fetchData();
  }, [isModal, setDataPlan]);

  const edit = (_id, data) => {
    const newData = {
      name: data.name,
      amount: data.amount,
      duaDate: data.duaDate,
      status: data.status,
    };
    setDataItem(newData);
    setIdpLan(_id);
    setId({
      idPlan: _id,
      idMedicine: data.medicine._id,
    });
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const handleSubmit = async (values) => {
    const data = {
      _id: id.idPlan,
      name: values.name,
      medicine: id.idMedicine,
      amount: values.amount,
      duaDate: formatDate(values.duaDate),
      status: values.status,
      __v: 0,
    };
    const response = await putProductionPlan(idPlan, data);
    if (response.code === 200) {
      configMessage(response);
      setModal(false);
    } else {
      configMessage(response);
    }
  };

  return (
    <Layout>
      <Table
        scroll={{ y: 362 }}
        columns={columns(edit)}
        dataSource={dataPlan}
      />
      <Modal
        data={dataItem}
        handleCancel={handleCancel}
        onFinish={handleSubmit}
        isModal={isModal}
        title="Edit item"
      />
    </Layout>
  );
};

export default ProductionPlan;
