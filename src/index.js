import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';
import routeConfig from './router/index';


function drawing(routeConfig) {
  return routeConfig.map((item,index) => {
    if (item.childRoutes) {
      return <Route path={item.path} key={index} element={<item.component/>}>
        {drawing(item.childRoutes)}
      </Route>
    }else{
      // if (item.indexRoute) {
      //   return <IndexRoute element={<item.indexRoute.component/>}></IndexRoute>
      // }
      return <Route path={item.path} key={index} index= {index === 1? true : false } element={<item.component/>} ></Route>
    }
  })
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // HashRouter 监听 window 的 hashchange 事件来实现的 （ 会带着#号 ）
  // <HashRouter>
  // </HashRouter>
  // BrowserRouter 监听 window 的 popstate 事件来实现的
  // <React.StrictMode>
    <BrowserRouter>
        <Routes>
          {drawing(routeConfig)}
        </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// 如果你想开始在你的应用程序中测量性能，打开下面这段代码。不懂怎么用的可以度娘一波，so easy
// reportWebVitals(console.warn);
