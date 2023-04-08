import React from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Image } from 'antd'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

const { Header, Content, Footer, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2'].map(key => ({
  key,
  label: `nav ${key}`,
}))

// const items2: MenuProps['items'] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1)

//   return {
//     key: `Wasiatku`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//   }
// })
type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem(
    '',
    'grp',
    null,
    [getItem('Wasiatku', '1'), getItem('Wasiat Untukku', '2')],
    'group',
  ),
]
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <TheHeader />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu mode="inline" style={{ height: '100%' }} items={items} />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
      <TheFooter />
    </Layout>
  )
}

export default App
