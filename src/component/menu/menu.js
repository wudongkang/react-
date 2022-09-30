import React,{useState} from 'react';
import { Menu } from 'antd';
import routeConfig from '../../router/index';
import { useNavigate, useLocation } from 'react-router-dom';

const Menus = ()=>{
  const navigator = useNavigate()
  const Location = useLocation()
  console.log(Location);
  // 刷新默认路由和默认选中
  const [defaultMenu] = useState(Location.pathname)
  const [selectedMenu,setselectedMenu] = useState(['/'+ Location.pathname.split('/')[1]])
  // 菜单只能打开一个。
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => selectedMenu.indexOf(key) === -1);
     setselectedMenu([latestOpenKey]);
  };
  // 菜单路由跳转
  const jump  = (e) => {
    console.log(e);
    navigator(e.key)
  }
  // 通过路由渲染的菜单。
  const routeConfigs = (routeConfig) =>{
    return routeConfig.map((item, index) => {
      if (!item.showMenu) {
        if (item.defaultMenu ) {
          // setdefaultMenu('/')
        }
        if (item.childRoutes) {
          return {
            key: item.path,
            label: item.name,
            name:'11',
            icon: item.icon,
            children: [...routeConfigs(item.childRoutes)]
          }
        }else{
          return {
            key: item.path,
            icon: item.icon,
            label: item.name,
          }
        }
      }else{
        return null
      }
    })
  }
  return (
    <Menu theme="dark"
      mode="inline"
      defaultSelectedKeys={[defaultMenu]}
      openKeys={selectedMenu}
      onOpenChange={onOpenChange}
      items={routeConfigs(routeConfig)}
      onClick={jump}
    />
  )
}

export default Menus
