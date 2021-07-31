import React, { useState } from "react";
import { Row, Col } from "antd";
import Button from "../../component/Button";
import DescriptionProfile from "./Profile";
import Modal from "./Modal";
import Layout from "../../layout/layout";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const label = {
    name: "Name",
    phone: "Telephone",
    email: "Email",
    company: "The Company",
    address: "Address",
  };
  const profile = {
    name: "Name",
    phone: "Telephone",
    email: "Email",
    company: "The Company",
    address: "Address",
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const cancel = () => {
    setIsOpen(false);
  };
  return (
    <Layout>
      <Row>
        <Col span={12} offset={6}>
          <DescriptionProfile
            title="My Profile"
            label={label}
            profile={profile}
          />
          <Button title="Edit" type="primary" onClick={openModal} />
        </Col>
        <Modal title="Edit Profile" isModal={isOpen} cancel={cancel} />
      </Row>
    </Layout>
  );
};

export default Profile;
