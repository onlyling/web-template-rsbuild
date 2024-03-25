import { MobileOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input, Button } from 'antd'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import config from '@/config'
import useUser from '@/stores/user'

import STYLES from './style.module.less'

type FormValues = {
  phone: string
  password: string
}

function isMobile(value: string): boolean {
  const temp = value.replace(/[^-|\d]/g, '')
  return /^((\+86)|(86))?(1)\d{10}$/.test(temp) || /^0[0-9-]{10,13}$/.test(temp)
}

const LoginForm = () => {
  const [form] = Form.useForm<FormValues>()
  const navigate = useNavigate()

  return (
    <div className={STYLES.page}>
      <div className={STYLES.header}>欢迎登录</div>

      <div className={STYLES.prompts}>
        24jieqi 旗下水果产业服务一站式运营管理系统
      </div>

      <Form form={form}>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: '请输入手机号',
            },
            {
              validator: (_, value) => {
                if (value && !isMobile(value)) {
                  return Promise.reject(new Error())
                }
                return Promise.resolve()
              },
              message: '请输入正确的手机号',
            },
          ]}>
          <Input
            prefix={<MobileOutlined />}
            placeholder="请输入手机号"
            size="large"
          />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="请输入密码"
            size="large"
          />
        </Form.Item>
        <Button
          type="primary"
          size="large"
          block
          onClick={() => {
            form.validateFields().then((values: FormValues) => {
              const loginSuccess = (t: string) => {
                const { setToken } = useUser.getState()

                setToken(t)
                navigate(config.routerBasePath)
              }

              // eslint-disable-next-line no-console
              console.log('values => ', values)

              // TODO 补充登录逻辑
              new Promise<void>(resolve => {
                setTimeout(resolve, 500)
              }).then(() => {
                loginSuccess('token')
              })
            })
          }}>
          登录
        </Button>
      </Form>
    </div>
  )
}

export default memo(LoginForm)
