(()=>{var e={7632:function(e,n,t){var r={"./error-test/router.tsx":"4021","./user/router.tsx":"2216"};function s(e){return t(_(e))}function _(e){if(!t.o(r,e)){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=_,e.exports=s,s.id="7632"},4854:function(e,n,t){"use strict";t.d(n,{lq:()=>z,gb:()=>$,OL:()=>I});var r=t("2676"),s=t("6207"),_=t.n(s),o=t("5271"),a=t("5791"),i=t("3456"),d=t("2075"),l=t("2023"),p=t("4002"),c=t("7541"),u=t("1813"),m=t("6643"),h=t("9981"),b=t.n(h);let g=e=>(0,r.jsx)("div",{...e,className:b()("admin-layout_page",e.className)}),E=e=>(0,r.jsx)("div",{...e,className:b()("admin-layout_header",e.className)}),T=e=>(0,r.jsx)("div",{...e,className:b()("admin-layout_body",e.className)}),f=e=>(0,r.jsx)("div",{...e,className:b()("admin-layout_sider",e.className)}),v=e=>(0,r.jsx)("div",{...e,className:b()("admin-layout_content",e.className)}),R=(0,o.createContext)({className:"",setClassName:()=>{}}),N=()=>(0,o.useContext)(R),O=e=>{let{setClassName:n}=N();(0,o.useEffect)(()=>(n(e),()=>{n("")}),[e,n])},I=()=>{O("admin-layout_content-flex-screen")},k=(0,o.memo)(e=>{let{children:n}=e,[t,s]=(0,o.useState)(""),_=(0,o.useMemo)(()=>({className:t,setClassName:s}),[t]);return(0,r.jsx)(R.Provider,{value:_,children:n})});var A=t("2032");let x=(0,o.createContext)({openKeys:[],selectedKeys:[],setMenuSelect:()=>{}}),j=()=>(0,o.useContext)(x),D=(0,o.memo)(e=>{let{children:n}=e,[t,s]=(0,o.useState)({openKeys:[],selectedKeys:[]}),_=(0,o.useMemo)(()=>({...t,setMenuSelect:s}),[t]);return(0,r.jsx)(x.Provider,{value:_,children:n})}),U=(e,n)=>e.map(e=>{var t;let r=e.access&&!n(e.access);return{...e,path:r?"":e.path,children:r?[]:(null===(t=e.children)||void 0===t?void 0:t.length)?U(e.children,n):[]}}).filter(e=>{var n;return e.path||!e.path&&(null===(n=e.children)||void 0===n?void 0:n.length)}),w=e=>{var n;return(null===(n=e.children)||void 0===n?void 0:n.map(n=>n.path??w(e)).join("_"))||""},S=e=>e.map(e=>{var n;return{key:e.path??`${w(e)}_parent`,icon:e.icon,label:e.title,children:(null===(n=e.children)||void 0===n?void 0:n.length)?S(e.children):void 0}}),H=(e,n,t)=>{for(let r=0;r<e.length;r++){let s=e[r],_=[...t,s];if((null==s?void 0:s.key)===n)return _;let o=H(s.children||[],n,_);if(o)return o}},y=(0,o.memo)(e=>{let{menu:n}=e,t=(0,a.s0)(),{pathname:s}=(0,a.TH)(),{selectedKeys:_,openKeys:i,setMenuSelect:d}=j(),{hasAccess:l}=(0,m.Z)(),p=(0,o.useMemo)(()=>S(U(n,l)),[l,n]);(0,o.useEffect)(()=>{let e=H(p,s,[]);(null==e?void 0:e.length)&&d(n=>({selectedKeys:[e[e.length-1].key],openKeys:e.length>1?e.slice(0,e.length-1).map(e=>e.key):n.openKeys}))},[p,s,d]);let c=(0,o.useCallback)(e=>{d(n=>({...n,selectedKeys:e.selectedKeys}))},[d]),u=(0,o.useCallback)(e=>{d(n=>({...n,openKeys:e}))},[d]),h=(0,o.useCallback)(e=>{t(e.key)},[t]);return(0,r.jsx)(A.Z,{selectedKeys:_,openKeys:i,onSelect:c,onOpenChange:u,onClick:h,className:"admin-layout_sider-menu",mode:"inline",items:p})});var P=t("6629"),C=t("6666");let B=(0,o.memo)(()=>(0,r.jsxs)(g,{children:[(0,r.jsxs)(E,{children:[(0,r.jsxs)(P.Z,{direction:"horizontal",children:[(0,r.jsx)(C.Z.Avatar,{active:!0}),(0,r.jsx)(C.Z.Input,{active:!0})]}),(0,r.jsxs)(P.Z,{direction:"horizontal",children:[(0,r.jsx)(C.Z.Avatar,{active:!0}),(0,r.jsx)(C.Z.Button,{active:!0})]})]}),(0,r.jsxs)(T,{children:[(0,r.jsxs)(f,{style:{padding:12},children:[(0,r.jsx)(C.Z,{active:!0}),(0,r.jsx)(C.Z,{active:!0}),(0,r.jsx)(C.Z,{active:!0}),(0,r.jsx)(C.Z,{active:!0})]}),(0,r.jsx)(v,{children:(0,r.jsxs)(P.Z,{direction:"vertical",size:"large",style:{width:"100%"},children:[(0,r.jsx)("div",{style:{backgroundColor:"#fff"},children:(0,r.jsx)(C.Z,{avatar:!0,paragraph:{rows:4}})}),(0,r.jsx)("div",{style:{backgroundColor:"#fff"},children:(0,r.jsx)(C.Z,{avatar:!0,paragraph:{rows:4}})}),(0,r.jsx)("div",{style:{backgroundColor:"#fff"},children:(0,r.jsx)(C.Z,{avatar:!0,paragraph:{rows:4}})})]})})]})]}));var G=t("7026"),L=t("3241"),M=t("6209"),Z=t("4603"),V=t("3694"),F=t("6346"),K=t("9008"),X=t("7055");let W=()=>{let{setToken:e}=(0,X.Z)(),n=(0,K.Z)();return(0,F.Z)(()=>{new Promise(e=>{setTimeout(e,400)}).then(()=>{e(""),n()})})},Y=(0,o.memo)(()=>{let{user:e}=(0,X.Z)(),n=W();return(0,r.jsx)(Z.Z,{menu:{items:[{key:"changePassword",label:"修改密码"},{key:"logout",label:"退出登录"}],onClick:e=>{let{key:t}=e;if("logout"===t)V.Z.confirm({title:"确定要退出登录吗？",icon:(0,r.jsx)(G.Z,{}),maskClosable:!1,onOk:()=>{n()}})}},children:(0,r.jsxs)("div",{className:"admin-layout-user-info",children:[(0,r.jsx)("div",{className:"admin-layout-user-info_avatar",children:(0,r.jsx)(L.Z,{})}),(0,r.jsxs)("div",{className:"admin-layout-user-info_name",children:[e.name," ",(0,r.jsx)(M.Z,{})]})]})})}),J=e=>{let{menu:n}=e,t=(0,a.pC)(),s=(0,l.Z)(),h=(0,d.qv)(),b=(0,o.useMemo)(()=>{if(h.length){let e=h[h.length-1].route;if(!_()(e.access))return m.Z.getState().hasAccess(e.access)}return!0},[h]),{className:R}=N();return s?(0,r.jsx)(B,{}):(0,r.jsxs)(g,{children:[(0,r.jsxs)(E,{children:[(0,r.jsxs)(i.rU,{to:"/admin",className:"admin-layout_brand",children:[(0,r.jsx)("img",{src:u.Z.logo,className:"admin-layout_brand-logo"}),(0,r.jsx)("div",{className:"admin-layout_brand-name",children:u.Z.name})]}),(0,r.jsx)(Y,{})]}),(0,r.jsxs)(T,{children:[(0,r.jsx)(f,{children:(0,r.jsx)(y,{menu:n})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(v,{className:R,children:b?t:(0,r.jsx)(c.Z,{status:"403",homePathName:u.Z.routerAdminPath})})})]})]})},z=(0,o.memo)(e=>(0,r.jsx)(k,{children:(0,r.jsx)(D,{children:(0,r.jsx)(J,{...e})})})),$=e=>(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)(C.Z,{active:!0}),children:(0,r.jsx)(e,{})})},2075:function(e,n,t){"use strict";t.d(n,{Kg:function(){return d},qv:function(){return i}});var r=t(2676),s=t(5271),_=t(5791);let o=(0,s.createContext)([]),a=()=>(0,s.useContext)(o),i=()=>{let e=(0,_.TH)(),n=a();return(0,s.useMemo)(()=>(0,_.fp)(n,e)||[],[e,n])},d=(0,s.memo)(e=>{let{routes:n}=e;return(0,r.jsx)(o.Provider,{value:n,children:(0,_.V$)(n)})})},2023:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(6346),s=t(5271),_=t(9008),o=t(6643),a=t(7055);let i=e=>{let[n,t]=(0,s.useState)(!0),i=(0,_.Z)(),d=(0,r.Z)(e||(()=>{}));return(0,s.useEffect)(()=>{let{fetchUser:e}=a.Z.getState();e().then(()=>o.Z.getState().updateAccess()).then(d).catch(i).finally(()=>{t(!1)})},[d,i]),n}},9008:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(6346),s=t(5791),_=t(8213);let o=()=>{let e=(0,s.s0)();return(0,r.Z)(()=>{e(_.R)})}},4002:function(e,n,t){"use strict";t.d(n,{Z:()=>h});var r=t("3062"),s=t("2676"),_=t("6206"),o=t("8752"),a=t("5271"),i=t("6346"),d=t("5200"),l=t("3226"),p=t.n(l),c=t("5791");let u=(0,a.memo)(e=>{let{onChangePathname:n,children:t}=e,{pathname:r}=(0,c.TH)(),s=(0,i.Z)(n||p());return(0,d.Z)(()=>{s(r)},[s,r]),t});class m extends a.PureComponent{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){var t,r;null===(t=(r=this.props).onError)||void 0===t||t.call(r,e,n)}render(){if(this.state.error)return this.props.renderError?this.props.renderError({name:this.state.error.name,message:this.state.error.message,onReset:this.onClickReload}):(0,s.jsx)(u,{onChangePathname:this.onClickReload,children:(0,s.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flex:1,overflow:"hidden"},children:(0,s.jsx)(_.ZP,{status:"warning",title:this.props.title||"加载失败，请稍后再试~",subTitle:`${this.state.error.name}
${this.state.error.message}`,extra:(0,s.jsx)(o.ZP,{type:"primary",onClick:this.onClickReload,children:this.props.reloadText||"重新加载"})})})});return this.props.children}constructor(...e){super(...e),(0,r._)(this,"state",{error:null}),(0,r._)(this,"onClickReload",()=>{this.setState({error:null})})}}let h=m},7541:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(2676),s=t(6206),_=t(8752),o=t(5791),a=t(4854),i=t(1813);let d=e=>{let{homePathName:n,status:t}=e,d=(0,o.s0)();return(0,a.OL)(),(0,r.jsx)("div",{style:{flex:1,alignContent:"center",justifyContent:"center",height:"100%"},children:(0,r.jsx)(s.ZP,{status:t,title:t,subTitle:"403"===t?"哎呀，出错了！无权访问...":"哎呀，出错了！页面不存在...",extra:(0,r.jsx)(_.ZP,{style:{marginTop:24},type:"primary",onClick:()=>{d(n??i.Z.routerBasePath)},children:"返回首页"})})})}},1813:function(e,n,t){"use strict";t.d(n,{Z:()=>a});let r=t.p+"static/image/192x192.e94557c2.png",s="/admin",{REACT_APP_BASE_URL:_,REACT_APP_API_HOST:o}={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_ad60ce8d-a3fe-4df5-963c-eb79df60471a",npm_package_dependencies_ahooks:"^3.8.1",npm_package_devDependencies__rsbuild_core:"1.0.9",npm_package_devDependencies__types_node:"^22.7.4",npm_package_lint_staged____ts_tsx__2:"prettier --write",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_package_devDependencies__fruits_chain_stylelint_config_preset:"^0.1.3",npm_config_user_agent:"pnpm/9.11.0 npm/? node/v20.17.0 linux x64",CI:"true",npm_package_scripts_commitlint:"commitlint --edit",npm_package_scripts_lint_staged:"lint-staged --allow-empty",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_ad60ce8d-a3fe-4df5-963c-eb79df60471a",PIPX_HOME:"/opt/pipx",npm_package_scripts_start_dev:"cross-env BUILD_ENV=dev rsbuild dev",npm_node_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_package_scripts_start_prod:"cross-env BUILD_ENV=prod rsbuild dev",HOME:"/home/runner",npm_package_dependencies__ant_design_icons:"^5.5.1",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"onlyling",npm_package_devDependencies__fruits_chain_eslint_config_preset:"^0.3.23",GRADLE_HOME:"/usr/share/gradle-8.10.1",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.1.12297006",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"9999765",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_package_scripts_lint_style:"stylelint 'src/**/*.less'",SYSTEMD_EXEC_PID:"606",npm_package_dependencies_dayjs:"^1.11.13",npm_package_devDependencies_husky:"^9.1.6",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",npm_package_description:"",npm_package_dependencies_antd:"^5.21.2",npm_package_dependencies_react_router_dom:"6.3.0",npm_package_devDependencies_typescript:"~5.3.0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_package_scripts_build_dev:"cross-env BUILD_ENV=dev rsbuild build",npm_package_devDependencies__types_react_dom:"^18.3.0",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240922.1.0",npm_package_scripts_build_prod:"cross-env BUILD_ENV=prod rsbuild build",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.7/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",npm_package_dependencies_zustand:"^4.5.5",npm_package_prettier:"@fruits-chain/prettier-config-preset",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:7188",GITHUB_WORKFLOW:"deploy gh-pages",_:"/home/runner/setup-pnpm/node_modules/.bin/pnpm",npm_package_scripts_start_test:"cross-env BUILD_ENV=test rsbuild dev",npm_package_devDependencies__commitlint_config_conventional:"^19.5.0",npm_package_commitlint_extends_0:"@commitlint/config-conventional",npm_package_scripts_build_gh_pages:"cross-env BUILD_ENV=gh-pages rsbuild build",npm_package_scripts_prepare:"husky",npm_package_lint_staged_____min__js_0:"eslint --fix",npm_config_registry:"https://registry.npmmirror.com",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"11142078348",STATS_VMFE:"true",npm_package_devDependencies__types_lodash:"^4.17.9",npm_package_lint_staged_____min__js_1:"prettier --write",npm_package_lint_staged___jsx_0:"eslint --fix",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"700eeecce44575ce7d0ed4bdf65ab8260730a92f",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",npm_package_lint_staged___jsx_1:"prettier --write",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"onlyling/web-template-rsbuild/.github/workflows/gh-pages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/dist/node-gyp-bin:/opt/hostedtoolcache/node/20.17.0/x64/bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_96c2b5a1-0ad6-49b0-8c80-6d1e7bb610f5",INVOCATION_ID:"0a1fb5841b314f0a9cdc64eaa3f7b6a1",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",npm_package_name:"web-template-rsbuild",npm_package_scripts_ncu:"npx npm-check-updates -u -x react-router-dom,typescript",NODE:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"26",GITHUB_TRIGGERING_ACTOR:"onlyling",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",npm_config_frozen_lockfile:"",npm_package_devDependencies__commitlint_cli:"^19.5.0",npm_package_devDependencies__rsbuild_plugin_less:"1.0.1",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",npm_package_dependencies_react_dom:"^18.3.1",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 14",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"onlyling/web-template-rsbuild",STATS_D_D:"true",npm_package_devDependencies_dotenv:"^16.4.5",npm_package_lint_staged____yml_yaml_md__0:"prettier --write",npm_lifecycle_script:"cross-env BUILD_ENV=gh-pages rsbuild build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.1.12297006",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"777129456",GITHUB_ACTIONS:"true",NODE_PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules/@rsbuild/core/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules/@rsbuild/core/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules/@rsbuild/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",npm_package_version:"0.5.0",npm_package_devDependencies__types_react:"^18.3.10",npm_lifecycle_event:"build:gh-pages",GITHUB_REF_PROTECTED:"false",npm_package_scripts_start_demo:"cross-env BUILD_ENV=demo rsbuild dev",npm_package_devDependencies_lint_staged:"^15.2.10",GITHUB_WORKSPACE:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",npm_package_author:"",npm_package_dependencies_lodash:"^4.17.21",GITHUB_SHA:"700eeecce44575ce7d0ed4bdf65ab8260730a92f",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"onlyling",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_package_scripts_lint_ts:"tsc --noEmit && eslint src --ext .ts,.tsx",npm_package_license:"ISC",npm_package_dependencies_classnames:"^2.5.1",LEIN_HOME:"/usr/local/lib/lein",npm_package_scripts_commit:"npx git-cz",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_ad60ce8d-a3fe-4df5-963c-eb79df60471a",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",GITHUB_ACTOR_ID:"9999765",RUNNER_WORKSPACE:"/home/runner/work/web-template-rsbuild",npm_package_devDependencies__rsbuild_plugin_react:"1.0.3",npm_package_devDependencies__types_webpack_env:"^1.18.5",npm_execpath:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/bin/pnpm.cjs",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_ad60ce8d-a3fe-4df5-963c-eb79df60471a",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_package_devDependencies_cross_env:"^7.0.3",npm_command:"run-script",PNPM_SCRIPT_SRC_DIR:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.1.12297006",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",BUILD_ENV:"gh-pages",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.189/provjobd.data",npm_package_devDependencies__fruits_chain_prettier_config_preset:"^0.0.5",npm_package_lint_staged____ts_tsx__0:'bash -c "tsc -p ./tsconfig.json --noEmit"',npm_config_shamefully_hoist:"true",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.1.12297006",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_ad60ce8d-a3fe-4df5-963c-eb79df60471a",npm_package_dependencies_react:"^18.3.1",npm_package_lint_staged____ts_tsx__1:"eslint --fix",INIT_CWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",NODE_ENV:"production",REACT_APP_BASE_URL:"/api",REACT_APP_API_HOST:"/",REACT_ROUTER_MODE:"gh-pages"};console.log("REACT_APP_BASE_URL => ",_),console.log("REACT_APP_API_HOST => ",o);let a={routerBasePath:"/",routerAdminPath:s,name:"春分数据服务平台",logo:r}},7069:function(e,n,t){"use strict";var r=t("2676"),s=t("5271"),_=t("8751"),o=t("4458"),a=t("6264"),i=t("9152"),d=t("6483"),l=t("3456"),p=t("4002"),c=t("7541"),u=t("1813"),m=t("5722"),h=t("450"),b=t("8213"),g=t("4854"),E=t("6666"),T=t("5791"),f=t("2023");let v=(0,s.memo)(()=>{let e=(0,T.s0)();return(0,f.Z)(()=>{e(u.Z.routerAdminPath)}),(0,r.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{style:{width:400},children:(0,r.jsx)(E.Z,{active:!0})})})});var R=t("4673"),N=t("2933"),O=t("9278");let I=[{icon:(0,r.jsx)(R.Z,{}),title:"首页",path:u.Z.routerAdminPath},{icon:(0,r.jsx)(N.Z,{}),title:"基础管理",children:[{icon:(0,r.jsx)(O.Z,{}),title:"用户管理",path:h.s}]}];var k=t("2075");let A=t(7632),x=[];A.keys().forEach(e=>{let n=A(e).default;x.push(...n)});let j=[{path:"/",element:(0,r.jsx)(v,{})},{path:b.R,element:(0,r.jsx)(b.Z,{})},{path:u.Z.routerAdminPath,element:(0,r.jsx)(g.lq,{menu:I}),children:[{index:!0,element:(0,r.jsx)(()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Home"}),(0,r.jsx)("p",{children:(0,r.jsx)(l.rU,{to:h.s,children:"go user list"})}),(0,r.jsx)("p",{children:(0,r.jsx)(l.rU,{to:`${h.s}lll`,children:"go 404"})}),(0,r.jsx)("p",{children:(0,r.jsx)(l.rU,{to:m.I,children:"go admin error test"})})]}),{})},...x,{path:"*",element:(0,r.jsx)(c.Z,{status:"404",homePathName:u.Z.routerAdminPath})}]},{path:"*",element:(0,r.jsx)(c.Z,{status:"404"})}],D=()=>(0,r.jsx)(p.Z,{children:(0,r.jsx)(k.Kg,{routes:j})});t("1414"),(0,d.locale)("zh-cn");let{REACT_ROUTER_MODE:U}={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_ad60ce8d-a3fe-4df5-963c-eb79df60471a",npm_package_dependencies_ahooks:"^3.8.1",npm_package_devDependencies__rsbuild_core:"1.0.9",npm_package_devDependencies__types_node:"^22.7.4",npm_package_lint_staged____ts_tsx__2:"prettier --write",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_package_devDependencies__fruits_chain_stylelint_config_preset:"^0.1.3",npm_config_user_agent:"pnpm/9.11.0 npm/? node/v20.17.0 linux x64",CI:"true",npm_package_scripts_commitlint:"commitlint --edit",npm_package_scripts_lint_staged:"lint-staged --allow-empty",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_ad60ce8d-a3fe-4df5-963c-eb79df60471a",PIPX_HOME:"/opt/pipx",npm_package_scripts_start_dev:"cross-env BUILD_ENV=dev rsbuild dev",npm_node_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_package_scripts_start_prod:"cross-env BUILD_ENV=prod rsbuild dev",HOME:"/home/runner",npm_package_dependencies__ant_design_icons:"^5.5.1",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"onlyling",npm_package_devDependencies__fruits_chain_eslint_config_preset:"^0.3.23",GRADLE_HOME:"/usr/share/gradle-8.10.1",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.1.12297006",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"9999765",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_package_scripts_lint_style:"stylelint 'src/**/*.less'",SYSTEMD_EXEC_PID:"606",npm_package_dependencies_dayjs:"^1.11.13",npm_package_devDependencies_husky:"^9.1.6",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",npm_package_description:"",npm_package_dependencies_antd:"^5.21.2",npm_package_dependencies_react_router_dom:"6.3.0",npm_package_devDependencies_typescript:"~5.3.0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_package_scripts_build_dev:"cross-env BUILD_ENV=dev rsbuild build",npm_package_devDependencies__types_react_dom:"^18.3.0",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240922.1.0",npm_package_scripts_build_prod:"cross-env BUILD_ENV=prod rsbuild build",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.7/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",npm_package_dependencies_zustand:"^4.5.5",npm_package_prettier:"@fruits-chain/prettier-config-preset",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:7188",GITHUB_WORKFLOW:"deploy gh-pages",_:"/home/runner/setup-pnpm/node_modules/.bin/pnpm",npm_package_scripts_start_test:"cross-env BUILD_ENV=test rsbuild dev",npm_package_devDependencies__commitlint_config_conventional:"^19.5.0",npm_package_commitlint_extends_0:"@commitlint/config-conventional",npm_package_scripts_build_gh_pages:"cross-env BUILD_ENV=gh-pages rsbuild build",npm_package_scripts_prepare:"husky",npm_package_lint_staged_____min__js_0:"eslint --fix",npm_config_registry:"https://registry.npmmirror.com",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"11142078348",STATS_VMFE:"true",npm_package_devDependencies__types_lodash:"^4.17.9",npm_package_lint_staged_____min__js_1:"prettier --write",npm_package_lint_staged___jsx_0:"eslint --fix",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"700eeecce44575ce7d0ed4bdf65ab8260730a92f",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",npm_package_lint_staged___jsx_1:"prettier --write",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"onlyling/web-template-rsbuild/.github/workflows/gh-pages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/dist/node-gyp-bin:/opt/hostedtoolcache/node/20.17.0/x64/bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_96c2b5a1-0ad6-49b0-8c80-6d1e7bb610f5",INVOCATION_ID:"0a1fb5841b314f0a9cdc64eaa3f7b6a1",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",npm_package_name:"web-template-rsbuild",npm_package_scripts_ncu:"npx npm-check-updates -u -x react-router-dom,typescript",NODE:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"26",GITHUB_TRIGGERING_ACTOR:"onlyling",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",npm_config_frozen_lockfile:"",npm_package_devDependencies__commitlint_cli:"^19.5.0",npm_package_devDependencies__rsbuild_plugin_less:"1.0.1",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",npm_package_dependencies_react_dom:"^18.3.1",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 14",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"onlyling/web-template-rsbuild",STATS_D_D:"true",npm_package_devDependencies_dotenv:"^16.4.5",npm_package_lint_staged____yml_yaml_md__0:"prettier --write",npm_lifecycle_script:"cross-env BUILD_ENV=gh-pages rsbuild build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.1.12297006",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"777129456",GITHUB_ACTIONS:"true",NODE_PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules/@rsbuild/core/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules/@rsbuild/core/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules/@rsbuild/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@1.0.9/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",npm_package_version:"0.5.0",npm_package_devDependencies__types_react:"^18.3.10",npm_lifecycle_event:"build:gh-pages",GITHUB_REF_PROTECTED:"false",npm_package_scripts_start_demo:"cross-env BUILD_ENV=demo rsbuild dev",npm_package_devDependencies_lint_staged:"^15.2.10",GITHUB_WORKSPACE:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",npm_package_author:"",npm_package_dependencies_lodash:"^4.17.21",GITHUB_SHA:"700eeecce44575ce7d0ed4bdf65ab8260730a92f",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"onlyling",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_package_scripts_lint_ts:"tsc --noEmit && eslint src --ext .ts,.tsx",npm_package_license:"ISC",npm_package_dependencies_classnames:"^2.5.1",LEIN_HOME:"/usr/local/lib/lein",npm_package_scripts_commit:"npx git-cz",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_ad60ce8d-a3fe-4df5-963c-eb79df60471a",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",GITHUB_ACTOR_ID:"9999765",RUNNER_WORKSPACE:"/home/runner/work/web-template-rsbuild",npm_package_devDependencies__rsbuild_plugin_react:"1.0.3",npm_package_devDependencies__types_webpack_env:"^1.18.5",npm_execpath:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.11.0/node_modules/pnpm/bin/pnpm.cjs",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_ad60ce8d-a3fe-4df5-963c-eb79df60471a",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_package_devDependencies_cross_env:"^7.0.3",npm_command:"run-script",PNPM_SCRIPT_SRC_DIR:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.1.12297006",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",BUILD_ENV:"gh-pages",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.189/provjobd.data",npm_package_devDependencies__fruits_chain_prettier_config_preset:"^0.0.5",npm_package_lint_staged____ts_tsx__0:'bash -c "tsc -p ./tsconfig.json --noEmit"',npm_config_shamefully_hoist:"true",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.1.12297006",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_ad60ce8d-a3fe-4df5-963c-eb79df60471a",npm_package_dependencies_react:"^18.3.1",npm_package_lint_staged____ts_tsx__1:"eslint --fix",INIT_CWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",NODE_ENV:"production",REACT_APP_BASE_URL:"/api",REACT_APP_API_HOST:"/",REACT_ROUTER_MODE:"gh-pages"},w="gh-pages"===U?l.UT:l.VK,S={cssVar:!0};(0,_.createRoot)(document.getElementById("root")).render((0,r.jsx)(s.StrictMode,{children:(0,r.jsx)(()=>(0,r.jsx)(o.ZP,{locale:i.default,theme:S,children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(w,{children:(0,r.jsx)(D,{})})})}),{})}))},5722:function(e,n,t){"use strict";t.d(n,{I:function(){return _}});var r=t(1813);let s=`${r.Z.routerAdminPath}/error-test`,_=`${s}/admin`},4021:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5271),s=t(4854);let _=[{path:t(5722).I,element:(0,s.gb)((0,r.lazy)(()=>t.e("916").then(t.bind(t,104))))}]},8213:function(e,n,t){"use strict";t.d(n,{R:()=>k,Z:()=>A});var r=t("2676"),s=t("129"),_=t("3050"),o=t("3491"),a=t("6235"),i=t("8752"),d=t("5271"),l=t("5791"),p=t("1813"),c=t("7055");let u="page-Ct0yAV",m="header-Ibae0J",h="prompts-dJilgj",b=(0,d.memo)(()=>{let[e]=o.Z.useForm(),n=(0,l.s0)();return(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("div",{className:m,children:"欢迎登录"}),(0,r.jsx)("div",{className:h,children:"24jieqi 旗下水果产业服务一站式运营管理系统"}),(0,r.jsxs)(o.Z,{form:e,children:[(0,r.jsx)(o.Z.Item,{name:"phone",rules:[{required:!0,message:"请输入手机号"},{validator:(e,n)=>n&&!function(e){let n=e.replace(/[^-|\d]/g,"");return/^((\+86)|(86))?(1)\d{10}$/.test(n)||/^0[0-9-]{10,13}$/.test(n)}(n)?Promise.reject(Error()):Promise.resolve(),message:"请输入正确的手机号"}],children:(0,r.jsx)(a.Z,{prefix:(0,r.jsx)(s.Z,{}),placeholder:"请输入手机号",size:"large"})}),(0,r.jsx)(o.Z.Item,{name:"password",children:(0,r.jsx)(a.Z.Password,{prefix:(0,r.jsx)(_.Z,{}),placeholder:"请输入密码",size:"large"})}),(0,r.jsx)(i.ZP,{type:"primary",size:"large",block:!0,onClick:()=>{e.validateFields().then(e=>{let t=e=>{let{setToken:t}=c.Z.getState();t(e),n(p.Z.routerBasePath)};console.log("values => ",e),new Promise(e=>{setTimeout(e,500)}).then(()=>{t("token")})})},children:"登录"})]})]})}),g="login-oY0wOB",E="portal-xH2IUI",T="brand-NNsswV",f="logo-dVX83E",v="name-G0Rv6M",R="desc-GVHa5H",N="bg-DDKLkb",O="ctx-xJrnvf",I=(0,d.memo)(e=>{let{children:n}=e;return(0,r.jsxs)("div",{className:g,children:[(0,r.jsxs)("div",{className:E,children:[(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)("img",{className:f,src:p.Z.logo}),(0,r.jsx)("div",{className:v,children:p.Z.name}),(0,r.jsx)("div",{className:R,children:"运营管理系统"})]}),(0,r.jsx)("img",{className:N,src:"http://dummyimage.com/1600x1600/EFF1FA/098"})]}),(0,r.jsx)("div",{className:O,children:n})]})}),k="/login",A=()=>(0,r.jsx)(I,{children:(0,r.jsx)(b,{})})},450:function(e,n,t){"use strict";t.d(n,{T:function(){return o},s:function(){return _}});var r=t(1813);let s=`${r.Z.routerAdminPath}/user`,_=`${s}`,o=`${s}/detail`},2216:function(e,n,t){"use strict";t.r(n),t.d(n,{default:()=>i});var r=t("2676"),s=t("5271"),_=t("4854"),o=t("5791"),a=t("450");let i=[{path:a.s,element:(0,r.jsx)(()=>(0,r.jsx)(o.j3,{}),{}),children:[{index:!0,element:(0,_.gb)((0,s.lazy)(()=>t.e("608").then(t.bind(t,3278))))},{path:`${a.T}/:id`,element:(0,_.gb)((0,s.lazy)(()=>t.e("13").then(t.bind(t,6903)))),access:["user_detail"]}]}]},6643:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5011),s=t(7758),_=t(5589);let o=0,a=(0,r.Ue)((0,s.tJ)((e,n)=>({loading:!1,access:[],setAccess:n=>{e({access:n})},hasAccess:e=>{let{access:t}=n();return(Array.isArray(e)?e:[e]).every(e=>t.indexOf(e)>-1)},updateAccess:async()=>{e({loading:!0});let n=new Date().getTime();o=n,await new Promise(e=>{setTimeout(e,300)}),n===o&&e({loading:!1,access:[]})}}),{name:`${_.u2}_${_.i8}_access`}))},7055:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5011),s=t(7758),_=t(5589);let o=(0,r.Ue)((0,s.tJ)((e,n)=>({token:"",setToken:n=>{e({token:n})},refreshToken:async()=>{let{token:e}=n();if(!e)return Promise.reject(Error("用户未登录"))},user:{id:"",name:""},fetchUser:async()=>{let{token:t}=n();if(!t)return Promise.reject(Error("用户未登录"));let r={id:"_",name:"模拟用户_xyz"};return e({user:r}),r}}),{name:`${_.u2}_${_.i8}_user`}))},5589:function(e){"use strict";e.exports=JSON.parse('{"u2":"web-template-rsbuild","i8":"0.5.0"}')}},n={};function t(r){var s=n[r];if(void 0!==s)return s.exports;var _=n[r]={exports:{}};return e[r].call(_.exports,_,_.exports,t),_.exports}t.m=e,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},(()=>{var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,s){if(1&s&&(r=this(r)),8&s||"object"==typeof r&&r&&(4&s&&r.__esModule||16&s&&"function"==typeof r.then))return r;var _=Object.create(null);t.r(_);var o={};e=e||[null,n({}),n([]),n(n)];for(var a=2&s&&r;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach(function(e){o[e]=function(){return r[e]}});return o.default=function(){return r},t.d(_,o),_}})(),t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce(function(n,r){return t.f[r](e,n),n},[]))},t.u=function(e){return"static/js/async/"+e+"."+({13:"30c245f2",608:"8086e361",916:"c2a79f02"})[e]+".js"},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},(()=>{var e={},n="web-template-rsbuild:";t.l=function(r,s,_,o){if(e[r]){e[r].push(s);return}if(void 0!==_){for(var a,i,d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+_){a=p;break}}}!a&&(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+_),a.src=r),e[r]=[s];var c=function(n,t){a.onerror=a.onload=null,clearTimeout(u);var s=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach(function(e){return e(t)}),n)return n(t)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),i&&document.head.appendChild(a)}})(),t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];t.O=function(n,r,s,_){if(r){_=_||0;for(var o=e.length;o>0&&e[o-1][2]>_;o--)e[o]=e[o-1];e[o]=[r,s,_];return}for(var a=1/0,o=0;o<e.length;o++){for(var r=e[o][0],s=e[o][1],_=e[o][2],i=!0,d=0;d<r.length;d++)(!1&_||a>=_)&&Object.keys(t.O).every(function(e){return t.O[e](r[d])})?r.splice(d--,1):(i=!1,_<a&&(a=_));if(i){e.splice(o--,1);var l=s();void 0!==l&&(n=l)}}return n}})(),t.p="/web-template-rsbuild/",t.rv=function(){return"1.0.8"},(()=>{var e={980:0};t.f.j=function(n,r){var s=t.o(e,n)?e[n]:void 0;if(0!==s){if(s)r.push(s[2]);else{var _=new Promise(function(t,r){s=e[n]=[t,r]});r.push(s[2]=_);var o=t.p+t.u(n),a=Error();t.l(o,function(r){if(t.o(e,n)&&(0!==(s=e[n])&&(e[n]=void 0),s)){var _=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+_+": "+o+")",a.name="ChunkLoadError",a.type=_,a.request=o,s[1](a)}},"chunk-"+n,n)}}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var s=r[0],_=r[1],o=r[2],a,i,d=0;if(s.some(function(n){return 0!==e[n]})){for(a in _)t.o(_,a)&&(t.m[a]=_[a]);if(o)var l=o(t)}for(n&&n(r);d<s.length;d++)i=s[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self.webpackChunkweb_template_rsbuild=self.webpackChunkweb_template_rsbuild||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),t.ruid="bundler=rspack@1.0.8";var r=t.O(void 0,["361","118","509"],function(){return t("7069")});r=t.O(r)})();