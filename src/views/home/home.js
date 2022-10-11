import React, {useEffect, useRef } from 'react';
import { Col, Divider, Row } from 'antd';
import * as echarts from 'echarts';
import {Drawer,DragableAndScalableRect} from '@/utils/Drawer';
import './home.scss';

const style = {
  width: '100%',
  height: '90%'
};

const Home = () => {
  const chartRef = useRef()
  console.log(chartRef);
  console.log(chartRef.current);

  useEffect(()=>{
    setTimeout(()=>{
      let chart = echarts.init(chartRef.current)
      chart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
        {
          name: 'Highest',
          type: 'line',
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Lowest',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                {
                  symbol: 'none',
                  x: '100%',
                  yAxis: 'max'
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max'
                  },
                  type: 'max',
                  name: '最高点'
                }
              ]
            ]
          }
        }
        ]
      })
      window.onresize = chart.resize
    },100)
    initcavvas()
    initdrawer()
  },[])

  const initcavvas = ()=>{
    const canvas = document.getElementById('drawer');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio; // 假设 dpr 为 2
    // 获取 css 的宽高
    const {width: cssWidth, height: cssHeight} = canvas.getBoundingClientRect();
    // 根据 dpr，扩大 canvas 画布的像素，使 1 个 canvas 像素和 1 个物理像素相等
    canvas.width = dpr * cssWidth;
    canvas.height = dpr * cssHeight;
    // 由于画布扩大，canvas 的坐标系也跟着扩大，如果按照原先的坐标系绘图内容会缩小，所以需要将绘制比例放大
    ctx.scale(dpr,dpr);
  }
  const initdrawer = ()=>{
    const drawer = new Drawer('#drawer');
    // 创建几何图形
    const rect = new DragableAndScalableRect({
      x: 100, // 图形中心点 x 坐标，非左上角坐标
      y: 100, // 图形中心点 y 坐标，非左上角坐标
      width: 200, // 图形宽度
      height: 200, // 图形高度
      minWidth: 10, // 最小宽度
      minHeight: 10, // 最小高度
      cornerWidth: 10 // 用于伸缩的四个角小矩形宽度
    });
    // 将几何图形添加到画板
    drawer.addPolygon(rect);
  }

  return(
    <>
      <Row gutter={20}>
        <Col className="gutter-row" span={12}>
          <Divider orientation="left">Horizontal</Divider>
          <div style={style} ref={chartRef}></div>
        </Col>
        <Col className="gutter-row"  span={12}>
          <Divider orientation="center" >Horizontal</Divider>
          <canvas id='drawer' style={{
            width: '100%',
            height: '90%',
            border: 'dashed 1px grey',
          }}></canvas>
        </Col>
        <Col className="gutter-row" span={12}>
          <Divider orientation="left">Horizontal</Divider>
          {/* <div style={style}>col-6</div> */}
          {/* <canvas id='drawer1' style={{
            width: '100%',
            height:' 100%',
            border: 'dashed 1px grey',
          }}></canvas> */}
        </Col>
        <Col className="gutter-row" span={12}>
          <Divider orientation="left">Horizontal</Divider>

        </Col>

        {/* <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col> */}
      </Row>
    </>
  )
}

export default Home
