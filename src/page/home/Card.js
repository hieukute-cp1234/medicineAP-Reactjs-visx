import React from 'react';
import { Card } from 'antd';
import Button from '../../component/Button';
import { style } from './style';
import PropTypes from 'prop-types';

const { Meta } = Card;

const CardComponent = (props) => {
  const { index, item, recipe, detailProcess } = props;
  return (
    <Card
      key={index}
      hoverable
      style={style.card}
      cover={
        <img
          alt="example"
          src="https://iwthanoi.vn/wp-content/uploads/2020/03/Pancreatin-la-loai-men-tieu-hoa-pho-bien.jpg"
        />
      }
    >
      <Meta title={item.name} key={index} />
      <div style={{ marginTop: '25px' }}>
        <Button
          style={style.button}
          onClick={() => recipe(item)}
          type="primary"
          title='Thành phần'
        />
        <Button
          type="primary"
          marginLeft='10px'
          title='Công đoạn'
          onClick={() => detailProcess(item)}
        />
      </div>
    </Card>
  )
}

CardComponent.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  recipe: PropTypes.func,
  detailProcess: PropTypes.func
}

export default CardComponent;