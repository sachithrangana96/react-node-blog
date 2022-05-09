import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1;
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   };
      // }),
    };
  });

const Sidebar = () => {
  return (
    <Sider 
      className="site-layout-background" width={200}>
        <Menu
            onClick={""}
            mode="vertical"
            // selectedKeys={[current]}
          >
            <Link to="/dashboard">
               <Menu.Item key="/dashboard" icon={<UserOutlined />}>
                 Dashboard
               </Menu.Item>
             </Link>
             <Link to="/post:id">
               <Menu.Item key="/dashboard" icon={<UserOutlined />}>
                 Dashboard
               </Menu.Item>
             </Link>
            <Link to="/add-post">
               <Menu.Item key="/add-recipe" icon={<LaptopOutlined />}>
                 Add Recipes
               </Menu.Item>
             </Link>
          </Menu>
    </Sider>
  )
}

export default Sidebar