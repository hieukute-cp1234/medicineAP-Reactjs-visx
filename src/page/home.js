import React, { useEffect } from 'react'
import { Button, Card, Col, Row } from 'antd'
import { useHistory } from 'react-router-dom'
import Layout from '../layout/layout'
import * as api from '../service/api'
import { useRecoilState } from 'recoil'
import * as atom from './../recoil/atom/atom'

const { Meta } = Card;

const HomeComponent = () => {
  const [medicineData, setMedicineData] = useRecoilState(atom.getMedicineData)

  useEffect(() => {
    const getData = async () => {
      const data = await api.getMedicineData()
      setMedicineData(data)
      console.log(data)
    }
    getData()
  }, [])

  const history = useHistory()

  const recipe = () => {
    history.push("/recipe")
  }

  const StepsConstructive = () => {
    history.push("/steps-constructive")
  }
  return (
    <Layout>
      <Row>
        {medicineData.map((item, index) => {
          return(
          <Col span={8}>
            <Card
              key={index}
              hoverable
              style={{ width: 300, marginLeft: '20px' }}
              cover={<img alt="example" src="https://iwthanoi.vn/wp-content/uploads/2020/03/Pancreatin-la-loai-men-tieu-hoa-pho-bien.jpg" />}
            >
              <Meta title={item.name} />
              <div style={{ marginTop: '25px' }}>
                <Button onClick={recipe} type="primary">Thành phần</Button>
                <Button onClick={StepsConstructive} style={{ marginLeft: '10px' }} type="primary">Công đoạn</Button>
              </div>
            </Card>
          </Col>
        )})}
      </Row>
    </Layout>
  )
}

export default HomeComponent