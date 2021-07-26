import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { Collapse, Descriptions, Card } from "antd";
import { getOrder } from "../../service/order";

const { Panel } = Collapse;

const Order = () => {
  const [dataAdmin, setDataAdmin] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const myEmail = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const callback = (key) => {
    console.log(key);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await getOrder();
      const { data } = result;
      setDataAdmin(data);
      const newData = data.filter((item) => item.email === myEmail);
      setDataUser(newData);
    };
    fetchData();
  }, [myEmail]);

  const check = () => {
    if (Number(role) === 1) {
      return dataAdmin;
    }
    return dataUser;
  };

  const price = (a, b) => {
    return a * b;
  };

  return (
    <Layout>
      <Card style={{ marginTop: 16 }} type="inner" title="Danh sách đơn hàng:">
        <Collapse
          defaultActiveKey={["1"]}
          onChange={callback}
          style={{
            margin: "50px 110px",
            width: "800px",
            backgroundColor: "#80c2fc",
          }}
        >
          {check().map((item, index) => (
            <Panel header={`Đơn hàng ${++index}`} key={++index}>
              <Descriptions
                title="THÔNG TIN KHÁCH HÀNG: "
                layout="vertical"
                bordered
              >
                <Descriptions.Item label="Tên Khách Hàng">
                  {item.name}
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                  {item.phone}
                </Descriptions.Item>
                <Descriptions.Item label="Địa Chỉ">
                  {item.address}
                </Descriptions.Item>
              </Descriptions>
              <Descriptions
                title="CHI TIẾT ĐƠN HÀNG: "
                layout="vertical"
                bordered
              >
                <Descriptions.Item label="Tên Thuốc">
                  {item.medicine.name}
                </Descriptions.Item>
                <Descriptions.Item label="Số lượng">
                  {`${item.amount} hộp`}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày đặt">
                  {item.date.slice(0, 10)}
                </Descriptions.Item>
                <Descriptions.Item label="Giá">
                  {price(item.amount, item.price.price).toLocaleString() + "₫"}
                </Descriptions.Item>
              </Descriptions>
            </Panel>
          ))}
        </Collapse>
      </Card>
    </Layout>
  );
};

export default Order;
