import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const Footers = () => {
  return (
        <Footer style={{textAlign: 'center',}} >
             Ant Design ©2018 Created by Ant UED
        </Footer>
  )
}

export default Footers