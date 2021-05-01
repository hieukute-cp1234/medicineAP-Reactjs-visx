import React, { useEffect } from 'react'
import Layout from '../layout/layout'
import { Table, Tag, Checkbox } from 'antd';
import * as atom from './../recoil/atom/atom';
import { useRecoilValue } from 'recoil'

const WareHouseProduct = () => {

  useEffect(()=>{
    data.map((item)=>{
      console.log(item.element)  
    })
    // data.element.map((item)=>{console.log(item.element)})
    console.log(data.element)
  },[])

  const data = useRecoilValue(atom.getMedicineData)
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      render: id => <p>{id}</p>,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: name => <p>{name}</p>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'amount',
      render: amount => {
        let color
        let text
        if (amount < 20) {
          color = 'volcano';
          text = 'Small quantity'
        } else if (amount > 50) {
          color = 'green';
          text = 'Big quantity'
        } else {
          color = 'geekblue';
          text = 'Sufficient quantity'
        }
        return (  
          <Tag color={color} key={amount}>
            {text}
          </Tag>
        )
      },
    },
    {
      title: 'Done',
      dataIndex: 'id',
      key: 'id',
      render: id => <Checkbox key={id} />,
    },
  ];

  return (
    <Layout>
      <Table columns={columns} dataSource={data} />
    </Layout>
  )
}

export default WareHouseProduct