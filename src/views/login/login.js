import React, { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import Particle from 'zhihu-particle';
import './login.scss'
import { Button, Checkbox, Form, Input } from 'antd';
// import * as THREE from 'three';

const Login = () => {
  // const CanvasRef = useRef();
  const navigates = useNavigate()
  const zhanghao = {
    Username:'kk',
    Password:'123'
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.Username === zhanghao.Username && values.Password === zhanghao.Password) {
      alert('登陆成功')
      navigates('/')
    }else{
      alert('密码不正确')
    }
  };

  useEffect(()=>{
    new Particle(document.getElementById('canvas-wrapper'),{
      atomColor: "#cccccc",   // 粒子颜色
      interactive: true,  //是否可以点击
      density: 30000, // 粒子密度，1000-50000  越低例子越多，
      velocity: 'fast'
    });

  },[])

  // useEffect(()=>{
  //   // --------- 场景 ---------
  //   const scene = new THREE.Scene()
  //   // 在场景中添加雾的效果，Fog参数分别代表‘雾的颜色’、‘开始雾化的视线距离’、刚好雾化至看不见的视线距离’
  //   scene.fog = new THREE.Fog(0x000000, 0, 10000)
  //   // 盒模型的深度
  //   const depth = 1400
  //   // 在场景中添加一个圆球盒模型
  //   // 1.创建一个立方体
  //   const geometry = new THREE.BoxGeometry(1000, 800, depth)
  //   // 2.加载纹理
  //   const texture = new THREE.TextureLoader().load('bg.png')
  //   // 3.创建网格材质（原料）
  //   const material = new THREE.MeshBasicMaterial({map: texture, side: THREE.BackSide})
  //   // 4.生成网格
  //   const mesh = new THREE.Mesh(geometry, material)
  //   // 5.把网格放入场景中
  //   scene.add(mesh)

  //   // 关于场景内的光源
  //   // 1.创建环境光
  //   const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  //   // 2.创建点光源，位于场景右下角
  //   const light_rightBottom = new THREE.PointLight(0x0655fd, 5, 0)
  //   light_rightBottom.position.set(0, 100, -200)
  //   // 3.把光源放入场景中
  //   scene.add(light_rightBottom)
  //   scene.add(ambientLight)

  //   // --------- 相机 ---------

  //   const width = CanvasRef.current.clientWidth
  //   const height = CanvasRef.current.clientHeight
  //   const fov = 15
  //   const distance = width / 2 / Math.tan(Math.PI / 12)
  //   const zAxisNumber = Math.floor(distance - depth / 2)
  //   const camera = new THREE.PerspectiveCamera(fov, width / height, 1, 30000)
  //   camera.position.set(0, 0, zAxisNumber)
  //   const cameraTarget = new THREE.Vector3(0, 0, 0)
  //   camera.lookAt(cameraTarget)
  //   // --------- 渲染器 ---------
  //   // 创建webgl渲染器实例
  //   const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  //   // 设置渲染器画布的大小
  //   renderer.setSize(width, height)

  //   //动画刷新
  //   const loopAnimate = () => {
  //       requestAnimationFrame(loopAnimate)
  //       scene.rotateY(0.1)
  //       // scene.rotatex(1)
  //       renderer.render(scene, camera)
  //   }
  //   loopAnimate()

  //   /** 将渲染器的输出添加到html元素 */
  //   CanvasRef.current.appendChild(renderer.domElement);
  //   return () =>{}
  // },[])

  return <div style={{width:'100%',height:'99%'}} id='canvas-wrapper' >
    <div className='login_form' >
      <h1>后台管理系统</h1>
      {/* <div style={{
        width:'200px',
        height:'200px',
      }} ref={CanvasRef}></div> */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>please Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
}
export default Login

