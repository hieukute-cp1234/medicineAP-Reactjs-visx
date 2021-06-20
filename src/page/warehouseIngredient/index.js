import React from 'react';
import Layout from '../../layout/Layout';
import { useRecoilValue } from 'recoil';
import { Table, Skeleton } from 'antd';
import { getDataElements } from '../../recoil/selectors/index';
import { columns } from './columns';

const WareHouse = () => {
  const result = useRecoilValue(getDataElements);
  const { data } = result;

  return (
    <Layout>
      {data === [] ? <Skeleton /> :
        <Table
          columns={columns}
          dataSource={data}
          scroll={data.length > 5 ? { y: 362 } : null}
        />
      }
    </Layout>
  )
}

export default WareHouse;