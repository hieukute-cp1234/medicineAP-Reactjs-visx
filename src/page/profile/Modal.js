import { Modal, Form, Input } from "antd";
import Button from "../../component/Button";
import PropTypes from "prop-types";

const ModalComponent = (props) => {
  const { title, isModal, handleCancel, form, finish, data } = props;

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  return (
    <Modal
      title={title}
      visible={isModal}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        {...layout}
        name="basic"
        form={form}
        initialValue={{ remember: false }}
        onFinish={finish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name plan!" }]}
          initialValue={data.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="TelePhone"
          name="phone"
          rules={[{ required: true, message: "Please input amount!" }]}
          initialValue={data.phone}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="The Company"
          name="company"
          rules={[{ required: true, message: "Please input amount!" }]}
          initialValue={data.company}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input amount!" }]}
          initialValue={data.address}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button title="Cancel" type="default" onClick={handleCancel} />
          <Button
            type="primary"
            title="Edit"
            htmlType="submit"
            marginLeft={100}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
  isModal: PropTypes.bool,
  handleCancel: PropTypes.func,
  finish: PropTypes.func,
  data: PropTypes.object,
};

export default ModalComponent;
