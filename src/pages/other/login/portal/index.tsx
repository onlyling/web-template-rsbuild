import type { FC } from 'react'
import React, { memo } from 'react'

import config from '@/config'

import STYLES from './style.module.less'

const LoginPortal: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={STYLES.login}>
      <div className={STYLES.portal}>
        <div className={STYLES.brand}>
          <img className={STYLES.logo} src={config.logo} />
          <div className={STYLES.name}>{config.name}</div>
          <div className={STYLES.desc}>运营管理系统</div>
        </div>

        <img
          className={STYLES.bg}
          src="http://dummyimage.com/1600x1600/EFF1FA/098"
        />
      </div>
      <div className={STYLES.ctx}>{children}</div>
    </div>
  )
}

export default memo(LoginPortal)
