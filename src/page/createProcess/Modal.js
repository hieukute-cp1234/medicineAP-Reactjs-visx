import { Modal, Form, Input, AutoComplete } from 'antd';
import Button from '../../component/Button';
import { style } from './style';

const ModalComponent = (props) => {
  const {
    title,
    isOpen,
    onFinish,
    onFinishFailed,
    options,
    handleCancel,
  } = props;

  const handleOptions = () => {
    const newArr = []
    for (let i = 0; i < options.length; i++) {
      const newObj = {
        value: options[i].name,
        id: options[i]._id
      }
      newArr.push(newObj);
    }
    return newArr;
  }

  return (
    <Modal
      title={title}
      visible={isOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={style().modal}
      >
        <Form.Item
          label="Name process"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Medicine"
          name="medicine"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <AutoComplete
            style={{
              width: '97%',
              marginLeft: '3%'
            }}
            options={handleOptions()}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
        </Form.Item>
        <Form.Item >
          <Button
            title='Create'
            htmlType="submit"
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalComponent;