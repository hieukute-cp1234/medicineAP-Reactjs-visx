import { Modal, Form, Input, InputNumber, Typography, DatePicker } from 'antd';
import PropTypes from 'prop-types';
import Button from '../../component/Button';
import { disabledDate } from '../../helpers/date';
import { FORMAT_DATE } from '../../constants/date';

const ModalComponent = (props) => {
  const {
    isModal,
    handleCancel,
    title,
    onFinish,
  } = props;

  const [form] = Form.useForm();

  const { Text } = Typography;

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  const cancel = () => {
    handleCancel();
    form.resetFields();
  }

  const finish = (values) => {
    onFinish(values);
    form.resetFields();
  }

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
          label="Name plan"
          name="name"
          rules={[{ required: true, message: 'Please input name plan!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please input amount!' }]}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="Dua Date"
          name="duaDate"
          rules={[{ required: true, message: 'Please input dua date!' }]}
        >
          <DatePicker
            format={FORMAT_DATE}
            disabledDate={disabledDate}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
        >
          <Text type="success">OPEN</Text>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            title='Cancel'
            type='default'
            onClick={cancel}
          />
          <Button
            type='primary'
            title='Create'
            htmlType="submit"
            marginLeft={100}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

ModalComponent.propTypes = {
  isModal: PropTypes.bool,
  handleCancel: PropTypes.func,
  title: PropTypes.string,
  onFinish: PropTypes.func,
}

export default ModalComponent;