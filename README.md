# web template rsbuild

## 开始使用

```bash
pnpm install
```

```bash
pnpm run start:dev
```

```bash
pnpm run build:dev
```

## 环境变量

新增或修改 `.env.xxx` 文件，在 `scripts` 中指定 `cross-env BUILD_ENV=xxx` 变量。

## 菜单、路由

当前方案菜单、路由分离，各自配置。

> 如果需要路由配置表自动生成菜单，可以参考 [web-template-ng](https://github.com/24jieqi/web-template-ng/tree/main/src/chunfen) 代码。

菜单配置参考 `src/app/app-menu.tsx` 文件，支持子菜单、菜单图标、菜单权限。

路由配置参考 `src/pages/user/router.tsx` 文件，在 React Router 上扩展权限字段，`src/app/app-router.tsx` 文件收集 `pages` 下 `.router.tsx` 文件，组合成管理后台路由数组。

## 用户权限

`src/stores/access.ts` 文件维护当前用户权限，在初始化应用(`src/app/app-initializing.tsx`)的时候发起用户信息、用户权限更新，登录后跳转到 `/admin` 路由(`src/app/admin-layout/admin-layout/index.tsx`)也会有同样的更新。
