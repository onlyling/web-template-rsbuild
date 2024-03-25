import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import pkgJSON from '@/../package.json'

export type User = {
  id: string
  name: string
}

type UserState = {
  token: string
  setToken: (t: string) => void
  refreshToken: () => Promise<void>
  user: User
  fetchUser: () => Promise<User>
}

const useUser = create(
  persist<UserState>(
    (set, get) => ({
      token: '',
      setToken: v => {
        set({
          token: v,
        })
      },
      refreshToken: async () => {
        const { token } = get()

        if (!token) {
          return Promise.reject(new Error('用户未登录'))
        }
        // TODO 请求刷新 token 接口
      },
      user: {
        id: '',
        name: '',
      },
      fetchUser: async () => {
        const { token } = get()
        if (!token) {
          return Promise.reject(new Error('用户未登录'))
        }
        const mockUser: User = {
          id: '_',
          name: 'mock user name',
        }

        set({
          user: mockUser,
        })

        return mockUser
      },
    }),
    {
      name: `${pkgJSON.name}_${pkgJSON.version}_user`,
    },
  ),
)

export default useUser
