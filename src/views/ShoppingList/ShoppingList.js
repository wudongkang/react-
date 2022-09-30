import React, { useState,useEffect} from 'react'
import {Button} from 'antd'
import useInterval from '../../utils/useInterval'

const ShoppingList = () =>{
  const [state, setstate] = useState({date:new Date()})
  const [value, setValue] = useState(0)
  // const [flag, setFlag] = useState(0)

  useEffect(()=>{
    //等于 componentdidmount  和 componentdidupdate 生命周期函数
    // console.log(state);
    // return() =>{
    //   console.log('aaa');
    // }
  })
  useInterval(()=>{
    setstate({date:new Date()})
  },1000)

  function onClicks(state) {
    if (state) {
      setValue(value + 1)
    }else{
      setValue(value + 1)
    }
  }

  function showButton() {
    if (value%2 === 0 ) {
      return '我是偶数'+ value
    }else{
      return '我是奇数'
    }
  }
  return(
    <div>
      <h1>
        北京时间：{state.date.toLocaleTimeString()}
      </h1>
      <h1>
        我是第个组件ShoppingList class{value}
      </h1>
      <Button onClick={onClicks}>
        我是第一个组件按钮ShoppingList  class
      </Button>
      <Button onClick={onClicks}>
        {showButton()}
      </Button>
      <Button onClick={() => setValue(0)}>
        清零
      </Button>
    </div>
  )
}
export default ShoppingList

// export class ShoppingList extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       date:new Date(),
//     };
//     this.user = {
//       firstName: 'Harper',
//       lastName: 'Perez'
//     };
//   }
//   componentDidMount(){
//     console.log(new Date());
//     this.timerID = setInterval(
//       () => this.onClickhaha(new Date()),
//       1000
//     );
//   }
//   onClickhaha (){
//     this.setState({
//       date: new Date(),
//     })
//   }
//   onClicks(){
//     alert(1)
//   }
//   render(){
//     return(
//        <div>
//         <h1>
//           我是第{this.state.date.toLocaleTimeString()}个组件ShoppingList class{this.user.firstName}
//         </h1>
//         <Button onClick={this.onClicks}>
//           我是第一个组件按钮ShoppingList  class
//         </Button>
//       </div>
//     )
//   }
// }

// export class ShoppingList1 extends React.Component{
//   render(){
//     return(
//        <div>
//         <h1>
//           我是第一个组件ShoppingList class1
//         </h1>
//         <Button>
//           我是第一个组件按钮ShoppingList  class1
//         </Button>
//       </div>
//     )
//   }
// }
