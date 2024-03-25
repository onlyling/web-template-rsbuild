const routerBasePath = '/'
const routerAdminPath = `${routerBasePath}admin/`

const { REACT_APP_BASE_URL, REACT_APP_API_HOST } = process.env

// eslint-disable-next-line no-console
console.log('REACT_APP_BASE_URL => ', REACT_APP_BASE_URL)
// eslint-disable-next-line no-console
console.log('REACT_APP_API_HOST => ', REACT_APP_API_HOST)

const config = {
  routerBasePath,
  routerAdminPath,
  name: '春分数据服务平台',
  logo: 'http://dummyimage.com/100x100/009988/ffffff',
}

export default config
