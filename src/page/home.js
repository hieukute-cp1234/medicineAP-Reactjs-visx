import React from 'react'
import Layout from '../layout/layout'
import { Card, Button, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

const { Meta } = Card;

const HomeComponent = () => {

  const history = useHistory()

  const recipe = ()=>{
    history.push("/recipe")
  }

  const StepsConstructive = ()=>{
    history.push("/steps-constructive")
  }
  return (
    <Layout>
      <Row>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 300, marginLeft: '20px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" />
            <div style={{ marginTop: '25px' }}>
              <Button onClick={recipe} type="primary">Thành phần</Button>
              <Button onClick={StepsConstructive} style={{ marginLeft: '10px' }} type="primary">Công đoạn</Button>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 300, marginLeft: '20px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" />
            <div style={{ marginTop: '25px' }}>
              <Button onClick={recipe} type="primary">Thành phần</Button>
              <Button onClick={StepsConstructive} style={{ marginLeft: '10px' }} type="primary">Công đoạn</Button>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 300, marginLeft: '20px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" />
            <div style={{ marginTop: '25px' }}>
              <Button onClick={recipe} type="primary">Thành phần</Button>
              <Button onClick={StepsConstructive} style={{ marginLeft: '10px' }} type="primary">Công đoạn</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default HomeComponent