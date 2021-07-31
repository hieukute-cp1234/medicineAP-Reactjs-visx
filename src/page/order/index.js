import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/layout';
import { Collapse, Descriptions, Card } from 'antd';

const { Panel } = Collapse;


const Order = () => {

    function callback(key) {
        console.log(key);
    }
    return (
        <Layout>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Danh sách đơn hàng:"
            >
                <Collapse defaultActiveKey={['1']} onChange={callback}
                    style={{ margin: "50px 110px", width: "800px", backgroundColor: "#80c2fc" }}>
                    <Panel header="Đơn hàng 1" key="1">
                        <Descriptions title="THÔNG TIN KHÁCH HÀNG: " layout="vertical" bordered >
                            <Descriptions.Item label="Tên Khách Hàng">Phạm Ngọc Anh</Descriptions.Item>
                            <Descriptions.Item label="Số điện thoại">0965424876</Descriptions.Item>
                            <Descriptions.Item label="Địa Chỉ">Gia Lâm Hà Nội</Descriptions.Item>
                        </Descriptions>
                        <Descriptions title="CHI TIẾT ĐƠN HÀNG: " layout="vertical" bordered>
                            <Descriptions.Item label="Tên Thuốc">Thuốc đau dầu</Descriptions.Item>
                            <Descriptions.Item label="Số lượng">181 hộp</Descriptions.Item>
                            <Descriptions.Item label="Ngày đặt">1/8/2021</Descriptions.Item>
                            <Descriptions.Item label="Giá">10tr</Descriptions.Item>
                        </Descriptions>
                    </Panel>
                    <Panel header="Đơn hàng 2" key="2">
                    </Panel>
                    <Panel header="Đơn hàng 3" key="3">
                    </Panel>
                </Collapse>
            </Card>
        </Layout>
    )
}

export default Order;
