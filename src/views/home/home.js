import React, {useEffect, useRef } from 'react';
import { Col, Divider, Row } from 'antd';
import * as echarts from 'echarts';
import './home.scss';

const style = {
  width: '100',
  height: '50vh'
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


  },[])

  return(
    <>
      <Row gutter={20}>
        <Col className="gutter-row" span={12}>
          <Divider orientation="left">Horizontal</Divider>
          <div style={style} ref={chartRef}></div>
        </Col>
        <Col className="gutter-row" span={12}>
          <Divider orientation="left">Horizontal</Divider>
          {/* <div style={style}>col-6</div> */}
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
