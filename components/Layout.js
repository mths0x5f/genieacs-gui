import React from 'react'
import 'antd/dist/antd.css'

import Sider from './Sider'
import Header from './Header'

import { Layout as AntLayout } from 'antd'

const { Content, Footer } = AntLayout

const Layout = props => (
  <AntLayout hasSider={true}>
    <Sider />
    <AntLayout>
      <div style={{ overflow: 'auto', height: '100vh' }}>
        <Header
          title={props.title}
          subTitle={props.subtitle}
          tags={props.tags}
          extra={props.extra}
          footer={props.footer}
          breadcrumb={props.breadcrumb}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff' }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'right' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    </AntLayout>
  </AntLayout>
)

export default Layout
