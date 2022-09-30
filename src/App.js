import React, { useState } from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import { Layout, Breadcrumb} from 'antd';
// import routeConfig from '@/router/index';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import '@/App.scss';
import Home from '@/views/home/home'
import Menus from '@/component/menu/menu'
// import { foreachTree } from '@/utils/useInterval';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const [routerValue, setrouterValue] = useState();
  // let BreadcrumbList = [];
  const Location = useLocation()
  // 通过路由判断当前显示什么组件，home 还是 outlet
  const isHome = () => {
    if (Location.pathname === '/') {
      return <Home></Home>
    }else{
      return <Outlet></Outlet>
    }
  }

  // const routeRender = () => {
  //   // routeConfig.filter((item) => item.path === ("/" + Location.pathname.split('/')[1]))
  //   for (let i = 0; i < routeConfig.length; i++) {
  //     const element = routeConfig[i];
  //     if (element.path === Location.pathname.split('/')[1]) {
  //       console.log(element);
  //       return element
  //     }
  //   }
  // }
  // 自带方法
  // function itemRender(route, params, routeConfig, paths) {
  //   const last = routeConfig.indexOf(route) === routeConfig.length - 1;
  //   return last ? (
  //     <span>{route.name}</span>
  //   ) : (
  //     <Link to={paths.join('/')}>{route.name}</Link>
  //   );
  // }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <p className="App-logo"/>
        </div>
        <Menus></Menus>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Breadcrumb
            style={{
              margin: '16px 0 0 16px',
            }}
            separator=">"
            // itemRender={itemRender}
            // routes={[routeRender()]}
          >
            {/* {
              [routeRender()].map((item,index) => {
                return <Breadcrumb.Item>{item.name}</Breadcrumb.Item>
              })
            } */}
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {isHome()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

