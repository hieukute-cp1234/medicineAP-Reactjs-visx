import { Modal, Form, Input, InputNumber } from "antd";
import PropTypes from "prop-types";
import Button from "../../component/Button";
import { style } from "./style";

const ModalComponent = (props) => {
  const { handleCancel, isModal, title, data, onFinish } = props;

  return (
    <Modal
      title={title}
      visible={isModal}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        {...style.layout}
        name="basic"
        initialValue={{ remember: false }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: "Please input name plan!" }]}
          initialValue={data.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: "Please input name plan!" }]}
          initialValue={data.amount}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="Tele Phone"
          name="phone"
          rules={[{ required: true, message: "Please input dua date!" }]}
          initialValue={data.phone}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="The Company"
          name="company"
          initialValue={data.company}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input name plan!" }]}
          initialValue={data.address}
        >
          <Input />
        </Form.Item>
        <Form.Item {...style.tailLayout}>
          <Button title="Cancel" type="default" onClick={handleCancel} />
          <Button
            type="primary"
            title="Purchase"
            htmlType="submit"
            marginLeft={100}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalComponent.propTypes = {
  handleCancel: PropTypes.func,
  isModal: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.object,
  onFinish: PropTypes.func,
};

export default ModalComponent;
