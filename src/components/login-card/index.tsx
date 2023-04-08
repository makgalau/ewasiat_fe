import { Button, Card, Col, Form, Input, Row, Typography } from 'antd'
import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import s from './index.module.scss'
import { useRouter } from 'next/router'

const { Title, Text } = Typography

export default function LoginCard() {
  const router = useRouter()

  type CreateUserResponse = {
    success: string
    message: string
  }

  // async function createUser(values: { no_telp: string; password: string }) {
  //   try {
  //     // 👇️ const response: Response
  //     const response = await fetch('http://103.150.93.67:8881/api/login_telp', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         no_telp: values.no_telp,
  //         password: values.password,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     })

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`)
  //     }

  //     // 👇️ const result: CreateUserResponse
  //     const result = (await response.json()) as CreateUserResponse

  //     console.log('result is: ', JSON.stringify(result, null, 2))

  //     return result
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log('error message: ', error.message)
  //       return error.message
  //     } else {
  //       console.log('unexpected error: ', error)
  //       return 'An unexpected error occurred'
  //     }
  //   }
  // }

  const onFinish = (values: { no_telp: string; password: string }) => {
    // createUser(values)
    router.push('/dashboard')
  }
  return (
    <main className={s.main}>
      <Card
        title={
          <Row style={{ marginBottom: 15, marginTop: 15 }} gutter={10}>
            <Col>
              <Image alt="App Logo" src="/logo.svg" width={44} height={44} />
            </Col>
            <Col>
              <Title level={3} style={{ margin: 'unset' }}>
                E-Wasiat
              </Title>
              <Text type="secondary">e-Wasiat App</Text>
            </Col>
          </Row>
        }
        headStyle={{ fontWeight: 'unset' }}
        className={s.loginCard}
      >
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                message: 'Please input your Phone number!',
                required: true,
              },
              {
                max: 50,
                message: 'Value should be less than 50 character',
              },
            ]}
          >
            <Input
              type="text"
              prefix={<UserOutlined />}
              placeholder="Phone number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                message: 'Please input your Password!',
                required: true,
              },
              {
                max: 50,
                message: 'Value should be less than 50 character',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 'unset' }}>
            <Button
              type="primary"
              htmlType="submit"
              icon={<LoginOutlined />}
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </main>
  )
}
