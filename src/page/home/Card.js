import React from "react";
import { Card } from "antd";
import Button from "../../component/Button";
import { style } from "./style";
import PropTypes from "prop-types";
import { role } from "../../constants/role";

const { Meta } = Card;

const CardComponent = (props) => {
  const { index, item, recipe, detailProcess, openModal } = props;
  const roleUser = localStorage.getItem("role");
  const isRoleUser = Number(roleUser) === role.USER;
  const isRoleAdmin = Number(roleUser) === role.ADMIN;

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
      <Meta
        title={item.name}
        key={index}
        description={`Giá: ${item.price.toLocaleString()}₫`}
      />
      <div style={{ marginTop: "25px" }}>
        <Button
          style={style.button}
          onClick={() => recipe(item)}
          type="primary"
          title="Thành phần"
        />
        {isRoleUser && (
          <Button
            type="primary"
            marginLeft="10px"
            title="Đặt hàng"
            onClick={() => openModal(item)}
          />
        )}
        {isRoleAdmin && (
          <Button
            type="primary"
            marginLeft="10px"
            title="Công đoạn"
            onClick={() => detailProcess(item)}
          />
        )}
        {roleUser === null && (
          <Button
            type="primary"
            marginLeft="10px"
            title="Đặt hàng"
            onClick={() => openModal(item)}
          />
        )}
      </div>
    </Card>
  );
};

CardComponent.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  recipe: PropTypes.func,
  detailProcess: PropTypes.func,
  openModal: PropTypes.func,
};

export default CardComponent;
