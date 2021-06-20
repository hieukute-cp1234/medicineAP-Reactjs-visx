import { Card } from 'antd';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { style } from './style';

const StepComponent = (props) => {
  const { data, title, number } = props;
  return (
    <>
      <h1>{`${title}(${number})`}</h1>
      <Droppable droppableId="text">
        {(provided) => {
          return (
            <div
              style={style(data.length).step}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((item, index) => (
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
                        {item.name}
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </>
  )
}

StepComponent.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  number: PropTypes.number
}

export default StepComponent;
