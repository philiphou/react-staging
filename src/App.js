import React, { Component } from 'react'
import { DownloadOutlined,WechatOutlined } from '@ant-design/icons';
import { Button,DatePicker} from 'antd';
import './App.css'
import 'antd/dist/antd.css'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <h2>App....</h2>
        <Button type = "link" shape="round" icon={<DownloadOutlined />} >
       下载
      </Button>
      <WechatOutlined/>
      <DatePicker/>
        </div>
    )
  }
}
