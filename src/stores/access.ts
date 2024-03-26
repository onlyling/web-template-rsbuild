import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import pkgJSON from '@/../package.json'

type AccessState = {
  loading: boolean
  access: string[]
  setAccess: (access: string[]) => void
  hasAccess: (access: string | string[]) => boolean
  updateAccess: () => Promise<void>
}

/** 发起请求的时间戳 */
let RequestTimestamp = 0

const useAccess = create(
  persist<AccessState>(
    (set, get) => ({
      loading: false,
      access: [],
      setAccess: v => {
        set({
          access: v,
        })
      },
      hasAccess: v => {
        const { access } = get()
        const _access = Array.isArray(v) ? v : [v]

        return _access.every(key => access.indexOf(key) > -1)
      },
      updateAccess: async () => {
        set({
          loading: true,
        })
        const ts = new Date().getTime()
        RequestTimestamp = ts
        // TODO 补充获取权限
        await new Promise<void>(resolve => {
          setTimeout(resolve, 300)
        })

        if (ts === RequestTimestamp) {
          set({
            loading: false,
            access: [],
          })
        }
      },
    }),
    {
      name: `${pkgJSON.name}_${pkgJSON.version}_access`,
    },
  ),
)

export default useAccess
