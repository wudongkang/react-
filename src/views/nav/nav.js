import React from 'react';
import { Outlet } from 'react-router-dom';

export default class nav extends React.Component{
  componentDidMount(){
  }
  render() {
    return(
      <div>
        <h1>
          我是nav
        </h1>
        <Outlet></Outlet>
      </div>

    )
  }
}
