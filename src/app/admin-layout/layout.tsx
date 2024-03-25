import classnames from 'classnames'
import React from 'react'

import './style.layout.less'

export const AdminLayoutPage: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = props => {
  return (
    <div
      {...props}
      className={classnames('admin-layout_page', props.className)}
    />
  )
}

export const AdminLayoutHeader: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = props => {
  return (
    <div
      {...props}
      className={classnames('admin-layout_header', props.className)}
    />
  )
}

export const AdminLayoutBody: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = props => {
  return (
    <div
      {...props}
      className={classnames('admin-layout_body', props.className)}
    />
  )
}

export const AdminLayoutSider: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = props => {
  return (
    <div
      {...props}
      className={classnames('admin-layout_sider', props.className)}
    />
  )
}

export const AdminLayoutContent: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = props => {
  return (
    <div
      {...props}
      className={classnames('admin-layout_content', props.className)}
    />
  )
}
