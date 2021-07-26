import React, { useState, useEffect } from "react";
import { profileById } from "../../recoil/atom/index";
import { useRecoilState } from "recoil";
import { Row, Col } from "antd";
import Button from "../../component/Button";
import DescriptionProfile from "./Profile";
import Modal from "./Modal";
import Layout from "../../layout/layout";
import { getProfile, putProfile } from "../../service/profile";
import { configMessage } from "../../helpers/configResultApi";

const Profile = () => {
  const [data, setData] = useRecoilState(profileById);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultData, setDefaultData] = useState({
    name: "hieu",
    phone: "0372242161",
    company: "hblab",
    address: "7979",
  });

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getProfile();
      const { data } = profile;
      const emailId = localStorage.getItem("email");
      const myProfile = data.filter((item) => item.email === emailId);
      setData(myProfile[0]);
    };
    fetchData();
  }, [isOpen, setData]);

  const openModal = () => {
    const newData = {
      name: data.name,
      phone: data.phone,
      company: data.company,
      address: data.address,
    };
    setDefaultData(newData);
    setIsOpen(true);
  };

  const cancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async (values) => {
    const newData = {
      name: values.name,
      email: data.email,
      phone: values.phone,
      address: values.address,
      company: values.company,
    };
    const result = await putProfile(data._id, newData);
    if (result.code === 200) {
      configMessage(result);
      setIsOpen(false);
    } else {
      configMessage(result);
    }
  };

  return (
    <Layout>
      <Row>
        <Col span={12} offset={8}>
          <DescriptionProfile title="My Profile" profile={data} />
          <Button
            title="Edit"
            type="primary"
            onClick={openModal}
            marginLeft={50}
            marginTop={20}
          />
        </Col>
        <Modal
          title="Edit Profile"
          isModal={isOpen}
          handleCancel={cancel}
          data={defaultData}
          finish={onSubmit}
        />
      </Row>
    </Layout>
  );
};

export default Profile;
