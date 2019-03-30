import { Layout as AntLayout } from 'antd'

const Content = props => (
  <AntLayout.Content
    style={{ margin: '24px 16px 0', padding: 24, background: '#fff' }}
  >
    {props.children}
  </AntLayout.Content>
)

export default Content
