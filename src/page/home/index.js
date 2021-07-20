import React from 'react';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { medicineData, medicineById, HelpById } from '../../recoil/atom/index';
import { getDataMedicines } from '../../recoil/selectors/index';
import Card from './Card';

const HomePage = () => {
  const medicines = useRecoilValue(getDataMedicines);
  const setMedicine = useSetRecoilState(medicineData);
  const setIdMedicine = useSetRecoilState(medicineById);
  const setId = useSetRecoilState(HelpById)
  const { data } = medicines;
  setMedicine(data);

  const history = useHistory();

  const recipe = (id) => {
    setId(id);
    history.push('/recipe')
  };

  const detailProcess = (id) => {
    setIdMedicine(id);
    history.push('/detail-process');
  }

  return (
    <Layout>
      <Row>
        {data.map((item, index) => {
          return (
            <Col span={8} key={index}>
              <Card
                index={index}
                item={item}
                recipe={() => recipe(item._id)}
                detailProcess={() => detailProcess(item._id)}
              />
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default HomePage;