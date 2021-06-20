import {
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select
} from 'antd';
import PropTypes from 'prop-types';
import Button from '../../component/Button';
import { disabledDate, configDate } from '../../helpers/date';
import { FORMAT_DATE } from '../../constants/date';
import { style } from './style';

const ModalComponent = (props) => {
  const {
    handleCancel,
    isModal,
    title,
    data,
    onFinish
  } = props;

  const { Option } = Select;

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
          label="Name plan"
          name="name"
          rules={[{ required: true, message: 'Please input name plan!' }]}
          initialValue={data.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please input amount!' }]}
          initialValue={data.amount}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="Dua Date"
          name="duaDate"
          rules={[{ required: true, message: 'Please input dua date!' }]}
          initialValue={configDate(data.duaDate)}
        >
          <DatePicker
            format={FORMAT_DATE}
            disabledDate={disabledDate}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          initialValue={data.status}
        >
          <Select style={style.select}>
            <Option value={0}>OPEN</Option>
            <Option value={1}>IN PROGRESS</Option>
            <Option value={2}>CLOSE</Option>
          </Select>
        </Form.Item>
        <Form.Item {...style.tailLayout}>
          <Button
            title='Cancel'
            type='default'
            onClick={handleCancel}
          />
          <Button
            type='primary'
            title='Update'
            htmlType="submit"
            marginLeft={100}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

ModalComponent.propTypes = {
  handleCancel: PropTypes.func,
  isModal: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.object,
  onFinish: PropTypes.func
}

export default ModalComponent;