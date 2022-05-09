import React, { Component } from 'react'
import { Card, Row ,Col} from 'antd';

const authLayout = ViewComponent =>{
return class authLayout extends Component {
  render() {
    return (
        <div className="site-card-border-less-wrapper">
            {/* <Row>
                <Col>
                </Col>
                <Col>
                <Card title="Card title"  bordered={true} style={{ width: 600, alignContent:"center" }}>
                    <ViewComponent />
                </Card>
                </Col>
                <Col></Col>
            </Row> */}
            <Row>
              <Col xs={24} xl={8}>
              
              </Col>
              <Col xs={24} xl={8}>
              <Card title="Card title"  bordered={true} style={{ width: 600, alignContent:"center" }}>
                    <ViewComponent />
                </Card>
              </Col>
              <Col xs={24} xl={8}>
              
              </Col>
            </Row>
           
        </div>
    )
  }
}
}

export default authLayout
