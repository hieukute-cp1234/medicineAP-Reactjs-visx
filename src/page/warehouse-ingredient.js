import React, { useState } from 'react';
import Layout from '../layout/Layout';
//import * as atom from '../recoil/atom';
import { useRecoilValue } from 'recoil';
import { Table, Tag, Skeleton } from 'antd';
import * as selector from '../recoil/selectors/index';

const WareHouse = () => {
  const [element, setElement] = useState([]);

  const data = useRecoilValue(selector.newData);

  data.map((item) => {
    console.log(item);
    item.element.map((a) => {
      console.log(a.element)
      if (a.name !== 'Tá dược') {
        element.push(a)
      }
      if (a.element !== undefined) {
        a.element.map((b) => {
          element.push(b)
        })
      }
    })
  })

  const columns = [
    // {
    //   title: 'STT',
    //   dataIndex: 'id',
    //   key: 'id',
    //   //render: id => <p>{id}</p>,
    // },
    {
      title: 'Tên thành phần',
      dataIndex: 'name',
      key: 'name',
      render: name => <p>{name}</p>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => <p>{amount}</p>
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
    // {
    //   title: 'Done',
    //   dataIndex: 'id',
    //   key: 'id',
    //   // render: id => <Checkbox key={id} />,
    // },
  ];
  return (
    <Layout>
      {element === [] ? <Skeleton /> :
        <Table
          columns={columns}
          dataSource={element}
          scroll={data.length > 5 ? { y: 362 } : null}
        />
      }
    </Layout>
  )
}

export default WareHouse;