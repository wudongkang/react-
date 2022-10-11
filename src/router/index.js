import App from '../App'
import Login from '@/views/login/Login.js'
// import Home from '@/views/home/home.js'
import nav from '@/views/nav/Nav.js'
import ShoppingList from '@/views/ShoppingList/ShoppingList';
// import nav1 from '@/views/nav/nav1/nav1'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

// --------------------------------------- 先看备注撒
// 备注！！！！！  父子组件前缀必须统一，比如，path：/guan (父组件) 子组件path 必须为：/guan/（子组件名称）
// path 跳转地址
// name 菜单的名字
// icon 菜单前缀图标 基于ant designui框架,
// showMenu: ture or false, 作用是决定是否展示在导航栏上，只适用于有childRoutes 子路由的情况下
// childRoutes 子路由

const routeConfig = [
   { path: 'login',
    component: Login,
    name:'登陆页（后续要隐藏）',
    showMenu:true
  },
  {
    path: '/',
    component: App,
    name:'首页',
    defaultMenu:true,
    icon: <UserOutlined />,
  },
  {
    path: 'guan',
    component: App,
    name:'管理',
    icon: <UploadOutlined />,
    childRoutes: [
      {
        path: '/guan/nav',
        name: '首页nav',
        component: nav,
        icon: <VideoCameraOutlined />,
      },
      {
        path: '/guan/ShoppingList',
        component: ShoppingList,
        name: "ShoppingList",
        icon: <UserOutlined />,
      },
    ]
  },
  // {
  //   path: '/wan1',
  //   component: App,
  //   name:'管理',
  //   icon: <UploadOutlined />,
  //   // indexRoute: { component: nav },
  //   childRoutes: [
  //     {
  //       path: '/wan1/nav',
  //       name: '首页nav',
  //       component: nav,
  //       icon: <VideoCameraOutlined />,
  //     },
  //     {
  //       path: '/wan1/ShoppingList',
  //       component: ShoppingList,
  //       name: "ShoppingList",
  //       icon: <UserOutlined />,
  //     },
  //   ]
  // },
  { path: 'login',
    component: Login,
    name:'登陆页（后续要隐藏）',
    showMenu:true
  }
]

export default routeConfig
