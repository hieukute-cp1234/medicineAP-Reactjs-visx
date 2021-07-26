import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "antd";
import { useHistory } from "react-router-dom";
import Layout from "../../layout/layout";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  medicineData,
  medicineById,
  HelpById,
  profileById,
} from "../../recoil/atom/index";
import { getDataMedicines } from "../../recoil/selectors/index";
import Card from "./Card";
import ModalComponent from "./Modal";
import { getProfile } from "../../service/profile";
import { postOrder } from "../../service/order";
import { configMessage } from "../../helpers/configResultApi";

const HomePage = () => {
  const medicines = useRecoilValue(getDataMedicines);
  const setMedicine = useSetRecoilState(medicineData);
  const setIdMedicine = useSetRecoilState(medicineById);
  const [dataProfile, setDataProfile] = useRecoilState(profileById);
  const setId = useSetRecoilState(HelpById);
  const dataItem = {
    name: "hieu1",
    phone: "01010101",
    company: "hblab",
    amount: 20,
    address: "sdsdsdsd",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [idMedicineById, setIdMedicineById] = useState();
  const { data } = medicines;
  setMedicine(data);
  const history = useHistory();
  const myEmail = localStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getProfile();
      const { data } = profile;
      const emailId = localStorage.getItem("email");
      const myProfile = data.filter((item) => item.email === emailId);
      setDataProfile(myProfile[0]);
    };
    fetchData();
  }, [isOpen, setDataProfile]);

  const recipe = (id) => {
    setId(id);
    history.push("/recipe");
  };

  const detailProcess = (id) => {
    setIdMedicine(id);
    history.push("/detail-process");
  };

  const handleCancel = () => {
    setIsOpen(false);
    setIsModal(false);
  };

  const handleSubmit = async (values) => {
    const toDay = new Date();
    const newDate =
      toDay.getDate() +
      "/" +
      (toDay.getMonth() + 1) +
      "/" +
      toDay.getFullYear();
    const newData = {
      name: values.name,
      email: myEmail,
      phone: values.phone,
      address: values.address,
      company: values.company,
      medicine: idMedicineById,
      amount: values.amount,
      date: newDate,
      price: idMedicineById,
      status: 0,
    };
    const result = await postOrder(newData);
    if (result.code === 200) {
      configMessage(result);
      setIsOpen(false);
    } else {
      configMessage(result);
    }
  };

  const handleModal = (id) => {
    if (myEmail) {
      setIdMedicineById(id);
      setIsOpen(true);
    } else {
      setIsModal(true);
    }
  };

  const openModal = () => {
    history.push("/login");
  };

  return (
    <Layout>
      <Row>
        {data.map((item, index) => {
          return (
            <Col span={8} key={index}>
              <Card
                index={index}
                item={item}
                recipe={() => recipe(item._id)}
                detailProcess={() => detailProcess(item._id)}
                openModal={() => handleModal(item._id)}
              />
            </Col>
          );
        })}
        <Modal
          title="Sorry!"
          visible={isModal}
          onOk={openModal}
          onCancel={handleCancel}
          okText="Signin"
          cancelText="Cancel"
        >
          <h3>You need to login before ordering ^^</h3>
        </Modal>
        <ModalComponent
          data={dataProfile || dataItem}
          handleCancel={handleCancel}
          onFinish={handleSubmit}
          isModal={isOpen}
          title="Information"
        />
      </Row>
    </Layout>
  );
};

export default HomePage;
