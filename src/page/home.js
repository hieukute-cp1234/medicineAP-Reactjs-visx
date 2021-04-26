import React, { useState, useEffect } from 'react'
import Layout from '../layout/layout'
import { Card, Button, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'
import * as api from '../service/api'

const { Meta } = Card;

const HomeComponent = () => {
  const [medicineData, setMedicineData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await api.getMedicineData()
      setMedicineData(data)
      console.log(medicineData)
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
        {medicineData.map((item, index) => (
          <Col span={8}>
            <Card
              key={index}
              hoverable
              style={{ width: 300, marginLeft: '20px' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title={item.name} />
              <div style={{ marginTop: '25px' }}>
                <Button onClick={recipe} type="primary">Thành phần</Button>
                <Button onClick={StepsConstructive} style={{ marginLeft: '10px' }} type="primary">Công đoạn</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default HomeComponent