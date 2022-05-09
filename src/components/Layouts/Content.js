import React from 'react'
import Headers from './Header';
import Footers from './Footer';
import Sidebar from './Sidebar';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
// import Contents from './components/Layouts/Content';

const DefaultLayout = ViewComponent => {
return class extends React.Component {
  
  render(){
      return(
       <>
       <Layout>
          <Headers />
            <Content style={{ padding: '0 50px',}}>
            <Breadcrumb style={{ margin: '16px 0',}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout  className="site-layout-background" style={{padding: '24px 0',}}  >
              <Sidebar />
              <Content style={{ padding: '0 24px',minHeight: 280,}} >
                <ViewComponent />
              </Content>
            </Layout>
            </Content>
          <Footers />
        </Layout>
       </>
    
      )
   }
  }
}

export default DefaultLayout