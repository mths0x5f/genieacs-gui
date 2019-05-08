import React from 'react'
import { Layout as AntLayout } from 'antd'
import 'antd/dist/antd.css'
import Header from './Header'
import Content from './Content'

const { Footer } = AntLayout

const Layout = props => (
  <AntLayout>
    <AntLayout>
      <div style={{ overflow: 'auto', height: '100vh' }}>
        {props.children}
        <Footer style={{ textAlign: 'right' }}>
          Algar Telecom ©2019 Created by GAP
        </Footer>
      </div>
    </AntLayout>
  </AntLayout>
)

export default Layout

export { Header, Content }
