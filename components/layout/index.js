import React from 'react'
import { Layout as AntLayout } from 'antd'
import 'antd/dist/antd.css'

import Sider from './Sider'

const { Footer } = AntLayout

const Layout = props => (
  <AntLayout hasSider={true}>
    <Sider />
    <AntLayout>
      <div style={{ overflow: 'auto', height: '100vh' }}>
        {props.children}
        <Footer style={{ textAlign: 'right' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    </AntLayout>
  </AntLayout>
)

export default Layout

import Header from './Header'
import Content from './Content'

export { Header, Content }
