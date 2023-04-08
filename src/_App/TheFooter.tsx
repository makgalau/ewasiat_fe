import { Layout } from 'antd'

const { Footer } = Layout

export default function TheFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <strong>e-Wasiat © {new Date().getFullYear()}</strong> by PT Wasiat Abadi
    </Footer>
  )
}
