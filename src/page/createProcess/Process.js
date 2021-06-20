import { Card, Empty } from 'antd';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { style } from './style';
import { PlusCircleOutlined } from '@ant-design/icons';
import Button from '../../component/Button';

const StepComponent = (props) => {
  const { data, openModal, title, number } = props;
  return (
    <>
      <h1>{`${title}(${number})`}</h1>
      <Droppable droppableId='text2'>
        {(provided) => (
          <div
            style={style(data.length).process}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.length > 0 ? data.map((item, index) => (
              <Draggable
                key={item._id}
                draggableId={item._id}
                index={index}
              >
                {(provided) => (
                  <div

                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Card style={style.card}>
                      <p>{item.name}</p>
                    </Card>
                  </div>
                )}
              </Draggable>
            )) : <Empty style={style().noData} />}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button
        title="Create"
        icon={<PlusCircleOutlined />}
        onClick={openModal}
        marginTop={15}
      />
    </>
  )
}


StepComponent.propTypes = {
  data: PropTypes.array,
  openModal: PropTypes.func,
  title: PropTypes.string,
  number: PropTypes.number
}

export default StepComponent;
