(()=>{var e={89659:function(){},62540:function(){},27175:function(){},45676:function(){},46632:function(e,n){"use strict";n.Z={page:"page-Ct0yAV",header:"header-Ibae0J",prompts:"prompts-dJilgj"}},31170:function(e,n){"use strict";n.Z={login:"login-oY0wOB",portal:"portal-xH2IUI",brand:"brand-NNsswV",logo:"logo-dVX83E",name:"name-G0Rv6M",desc:"desc-GVHa5H",bg:"bg-DDKLkb",ctx:"ctx-xJrnvf"}},58415:function(e){function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id="58415",e.exports=n},4088:function(e,n,t){"use strict";e.exports=t.p+"static/image/192x192.e94557c2.png"},61785:function(e,n,t){"use strict";var s=t(52676),r=t(46207),_=t.n(r),o=t(75271),i=t(5791),a=t(83456),d=t(42075),l=t(52023),p=t(36553),c=t(37541),u=t(68890),m=t(36643),b=t(51128),h=t(73344),g=t(64888),E=t(33873),T=t(74178),O=t(4009);t(62540);let R=e=>{let{menu:n}=e,t=(0,i.pC)(),r=(0,l.Z)(),E=(0,d.qv)(),R=(0,o.useMemo)(()=>{if(E.length){let e=E[E.length-1].route;if(!_()(e.access))return m.Z.getState().hasAccess(e.access)}return!0},[E]),{className:v}=(0,h.ZI)();return r?(0,s.jsx)(T.Z,{}):(0,s.jsxs)(b.PO,{children:[(0,s.jsxs)(b.T1,{children:[(0,s.jsxs)(a.rU,{to:"/admin",className:"admin-layout_brand",children:[(0,s.jsx)("img",{src:u.Z.logo,className:"admin-layout_brand-logo"}),(0,s.jsx)("div",{className:"admin-layout_brand-name",children:u.Z.name})]}),(0,s.jsx)(O.Z,{})]}),(0,s.jsxs)(b.Sr,{children:[(0,s.jsx)(b.jV,{children:(0,s.jsx)(g.Z,{menu:n})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(b.Q4,{className:v,children:R?t:(0,s.jsx)(c.Z,{status:"403",homePathName:u.Z.routerAdminPath})})})]})]})};n.Z=(0,o.memo)(e=>(0,s.jsx)(h.ov,{children:(0,s.jsx)(E.Ui,{children:(0,s.jsx)(R,{...e})})}))},19537:function(e,n,t){"use strict";t.d(n,{OL:function(){return r.OL},lq:function(){return s.Z}});var s=t(61785);t(33873);var r=t(73344)},73344:function(e,n,t){"use strict";t.d(n,{OL:function(){return a},ZI:function(){return o},ov:function(){return d}});var s=t(52676),r=t(75271);let _=(0,r.createContext)({className:"",setClassName:()=>{}}),o=()=>(0,r.useContext)(_),i=e=>{let{setClassName:n}=o();(0,r.useEffect)(()=>(n(e),()=>{n("")}),[e,n])},a=()=>{i("admin-layout_content-flex-screen")},d=(0,r.memo)(e=>{let{children:n}=e,[t,o]=(0,r.useState)(""),i=(0,r.useMemo)(()=>({className:t,setClassName:o}),[t]);return(0,s.jsx)(_.Provider,{value:i,children:n})})},51128:function(e,n,t){"use strict";t.d(n,{PO:function(){return o},Q4:function(){return l},Sr:function(){return a},T1:function(){return i},jV:function(){return d}});var s=t(52676),r=t(29981),_=t.n(r);t(75271),t(27175);let o=e=>(0,s.jsx)("div",{...e,className:_()("admin-layout_page",e.className)}),i=e=>(0,s.jsx)("div",{...e,className:_()("admin-layout_header",e.className)}),a=e=>(0,s.jsx)("div",{...e,className:_()("admin-layout_body",e.className)}),d=e=>(0,s.jsx)("div",{...e,className:_()("admin-layout_sider",e.className)}),l=e=>(0,s.jsx)("div",{...e,className:_()("admin-layout_content",e.className)})},33873:function(e,n,t){"use strict";t.d(n,{Ui:function(){return i},jy:function(){return o}});var s=t(52676),r=t(75271);let _=(0,r.createContext)({openKeys:[],selectedKeys:[],setMenuSelect:()=>{}}),o=()=>(0,r.useContext)(_),i=(0,r.memo)(e=>{let{children:n}=e,[t,o]=(0,r.useState)({openKeys:[],selectedKeys:[]}),i=(0,r.useMemo)(()=>({...t,setMenuSelect:o}),[t]);return(0,s.jsx)(_.Provider,{value:i,children:n})})},64888:function(e,n,t){"use strict";t(64072),t(87395),t(18936),t(54335),t(67475);var s=t(52676),r=t(18469),_=t(75271),o=t(5791),i=t(36643),a=t(33873);let d=(e,n)=>e.map(e=>{var t;let s=e.access&&!n(e.access);return{...e,path:s?"":e.path,children:s?[]:(null===(t=e.children)||void 0===t?void 0:t.length)?d(e.children,n):[]}}).filter(e=>{var n;return e.path||!e.path&&(null===(n=e.children)||void 0===n?void 0:n.length)}),l=e=>{var n;return(null===(n=e.children)||void 0===n?void 0:n.map(n=>n.path??l(e)).join("_"))||""},p=e=>e.map(e=>{var n;return{key:e.path??`${l(e)}_parent`,icon:e.icon,label:e.title,children:(null===(n=e.children)||void 0===n?void 0:n.length)?p(e.children):void 0}}),c=(e,n,t)=>{for(let s=0;s<e.length;s++){let r=e[s],_=[...t,r];if((null==r?void 0:r.key)===n)return _;let o=c(r.children||[],n,_);if(o)return o}};n.Z=(0,_.memo)(e=>{let{menu:n}=e,t=(0,o.s0)(),{pathname:l}=(0,o.TH)(),{selectedKeys:u,openKeys:m,setMenuSelect:b}=(0,a.jy)(),{hasAccess:h}=(0,i.Z)(),g=(0,_.useMemo)(()=>p(d(n,h)),[h,n]);(0,_.useEffect)(()=>{let e=c(g,l,[]);(null==e?void 0:e.length)&&b(n=>({selectedKeys:[e[e.length-1].key],openKeys:e.length>1?e.slice(0,e.length-1).map(e=>e.key):n.openKeys}))},[g,l,b]);let E=(0,_.useCallback)(e=>{b(n=>({...n,selectedKeys:e.selectedKeys}))},[b]),T=(0,_.useCallback)(e=>{b(n=>({...n,openKeys:e}))},[b]),O=(0,_.useCallback)(e=>{t(e.key)},[t]);return(0,s.jsx)(r.Z,{selectedKeys:u,openKeys:m,onSelect:E,onOpenChange:T,onClick:O,className:"admin-layout_sider-menu",mode:"inline",items:g})})},74178:function(e,n,t){"use strict";var s=t(52676),r=t(59503),_=t(14610),o=t(75271),i=t(51128);n.Z=(0,o.memo)(()=>(0,s.jsxs)(i.PO,{children:[(0,s.jsxs)(i.T1,{children:[(0,s.jsxs)(r.Z,{direction:"horizontal",children:[(0,s.jsx)(_.Z.Avatar,{active:!0}),(0,s.jsx)(_.Z.Input,{active:!0})]}),(0,s.jsxs)(r.Z,{direction:"horizontal",children:[(0,s.jsx)(_.Z.Avatar,{active:!0}),(0,s.jsx)(_.Z.Button,{active:!0})]})]}),(0,s.jsxs)(i.Sr,{children:[(0,s.jsxs)(i.jV,{style:{padding:12},children:[(0,s.jsx)(_.Z,{active:!0}),(0,s.jsx)(_.Z,{active:!0}),(0,s.jsx)(_.Z,{active:!0}),(0,s.jsx)(_.Z,{active:!0})]}),(0,s.jsx)(i.Q4,{children:(0,s.jsxs)(r.Z,{direction:"vertical",size:"large",style:{width:"100%"},children:[(0,s.jsx)("div",{style:{backgroundColor:"#fff"},children:(0,s.jsx)(_.Z,{avatar:!0,paragraph:{rows:4}})}),(0,s.jsx)("div",{style:{backgroundColor:"#fff"},children:(0,s.jsx)(_.Z,{avatar:!0,paragraph:{rows:4}})}),(0,s.jsx)("div",{style:{backgroundColor:"#fff"},children:(0,s.jsx)(_.Z,{avatar:!0,paragraph:{rows:4}})})]})})]})]}))},4009:function(e,n,t){"use strict";var s=t(52676),r=t(334),_=t(2876),o=t(58469),i=t(79214),a=t(68553),d=t(75271),l=t(56767),p=t(77055);t(45676);n.Z=(0,d.memo)(()=>{let{user:e}=(0,p.Z)(),n=(0,l.Z)();return(0,s.jsx)(i.Z,{menu:{items:[{key:"changePassword",label:"\u4FEE\u6539\u5BC6\u7801"},{key:"logout",label:"\u9000\u51FA\u767B\u5F55"}],onClick:e=>{let{key:t}=e;if("logout"===t)a.Z.confirm({title:"\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F",icon:(0,s.jsx)(r.Z,{}),maskClosable:!1,onOk:()=>{n()}})}},children:(0,s.jsxs)("div",{className:"admin-layout-user-info",children:[(0,s.jsx)("div",{className:"admin-layout-user-info_avatar",children:(0,s.jsx)(_.Z,{})}),(0,s.jsxs)("div",{className:"admin-layout-user-info_name",children:[e.name," ",(0,s.jsx)(o.Z,{})]})]})})})},82927:function(e,n,t){"use strict";var s=t(52676),r=t(14610),_=t(75271),o=t(5791),i=t(52023),a=t(68890);n.Z=(0,_.memo)(()=>{let e=(0,o.s0)();return(0,i.Z)(()=>{e(a.Z.routerAdminPath)}),(0,s.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("div",{style:{width:400},children:(0,s.jsx)(r.Z,{active:!0})})})})},86332:function(e,n,t){"use strict";var s=t(52676),r=t(17769),_=t(67878),o=t(10226),i=t(68890),a=t(90450);let d=[{icon:(0,s.jsx)(r.Z,{}),title:"\u9996\u9875",path:i.Z.routerAdminPath},{icon:(0,s.jsx)(_.Z,{}),title:"\u57FA\u7840\u7BA1\u7406",children:[{icon:(0,s.jsx)(o.Z,{}),title:"\u7528\u6237\u7BA1\u7406",path:a.s}]}];n.Z=d},68749:function(e,n,t){"use strict";t(11160),t(75698),t(67475);var s=t(52676),r=t(36553),_=t(37541),o=t(68890),i=t(26426),a=t(65876),d=t(19537),l=t(82927),p=t(86332),c=t(42075);let u=t(58415),m=[];u.keys().forEach(e=>{let n=u(e).default;m=[...m,...n]});let b=[{path:"/",element:(0,s.jsx)(l.Z,{})},{path:a.R,element:(0,s.jsx)(a.Z,{})},{path:o.Z.routerAdminPath,element:(0,s.jsx)(d.lq,{menu:p.Z}),children:[{index:!0,element:(0,s.jsx)(i.Z,{})},...m,{path:"*",element:(0,s.jsx)(_.Z,{status:"404",homePathName:o.Z.routerAdminPath})}]},{path:"*",element:(0,s.jsx)(_.Z,{status:"404"})}];n.Z=()=>(0,s.jsx)(r.Z,{children:(0,s.jsx)(c.Kg,{routes:b})})},24557:function(e,n,t){"use strict";var s=t(52676),r=t(58978),_=t(84114),o=t(54995),i=t(7672),a=t(83456),d=t(68749);t(13887),t(89659),(0,i.locale)("zh-cn");let{REACT_ROUTER_MODE:l}={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",GIT_CLONE_PROTECTION_ACTIVE:"false",npm_package_dependencies_ahooks:"^3.8.0",npm_package_devDependencies__rsbuild_core:"^0.7.4",npm_package_devDependencies__types_node:"^20.14.2",npm_package_lint_staged____ts_tsx__2:"prettier --write",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_package_devDependencies__fruits_chain_stylelint_config_preset:"^0.1.3",npm_config_user_agent:"pnpm/9.3.0 npm/? node/v20.14.0 linux x64",CI:"true",npm_package_scripts_commitlint:"commitlint --edit",npm_package_scripts_lint_staged:"lint-staged --allow-empty",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",PIPX_HOME:"/opt/pipx",npm_package_scripts_start_dev:"cross-env BUILD_ENV=dev rsbuild dev",npm_node_execpath:"/opt/hostedtoolcache/node/20.14.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_package_scripts_start_prod:"cross-env BUILD_ENV=prod rsbuild dev",HOME:"/home/runner",npm_package_dependencies__ant_design_icons:"^5.3.7",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"onlyling",npm_package_devDependencies__fruits_chain_eslint_config_preset:"^0.3.23",GRADLE_HOME:"/usr/share/gradle-8.8",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.3.11579264",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"9999765",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_package_scripts_lint_style:"stylelint 'src/**/*.less'",SYSTEMD_EXEC_PID:"602",npm_package_dependencies_dayjs:"^1.11.11",npm_package_devDependencies_husky:"^9.0.11",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",npm_package_description:"",npm_package_dependencies_antd:"^5.18.0",npm_package_dependencies_react_router_dom:"6.3.0",npm_package_devDependencies_typescript:"~5.3.0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_package_scripts_build_dev:"cross-env BUILD_ENV=dev rsbuild build",npm_package_devDependencies__types_react_dom:"^18.3.0",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.10/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240603.1.0",npm_package_scripts_build_prod:"cross-env BUILD_ENV=prod rsbuild build",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.3/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",npm_package_dependencies_zustand:"^4.5.2",npm_package_prettier:"@fruits-chain/prettier-config-preset",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19748",GITHUB_WORKFLOW:"deploy gh-pages",_:"/home/runner/setup-pnpm/node_modules/.bin/pnpm",npm_package_scripts_start_test:"cross-env BUILD_ENV=test rsbuild dev",npm_package_devDependencies__commitlint_config_conventional:"^19.2.2",npm_package_commitlint_extends_0:"@commitlint/config-conventional",npm_package_scripts_build_gh_pages:"cross-env BUILD_ENV=gh-pages rsbuild build",npm_package_scripts_prepare:"husky",npm_package_lint_staged____js_jsx__0:"eslint --fix",npm_config_registry:"https://registry.npmmirror.com",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"9462381311",STATS_VMFE:"true",npm_package_devDependencies__types_lodash:"^4.17.5",npm_package_lint_staged____js_jsx__1:"prettier --write",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"a660ff30150f7ae69db2458ed1dfdfb07643870b",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"onlyling/web-template-rsbuild/.github/workflows/gh-pages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/dist/node-gyp-bin:/opt/hostedtoolcache/node/20.14.0/x64/bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_e86c6529-c42e-4c0d-90d6-681805400cc8",INVOCATION_ID:"3aa3faf7019f41fb8a3235b97dc8a9a8",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",npm_package_name:"web-template-rsbuild",npm_package_scripts_ncu:"npx npm-check-updates -u -x react-router-dom,typescript",NODE:"/opt/hostedtoolcache/node/20.14.0/x64/bin/node",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"13",GITHUB_TRIGGERING_ACTOR:"onlyling",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",npm_config_frozen_lockfile:"",npm_package_devDependencies__commitlint_cli:"^19.3.0",npm_package_devDependencies__rsbuild_plugin_less:"^0.7.4",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",npm_package_dependencies_react_dom:"^18.3.1",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 20",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"onlyling/web-template-rsbuild",STATS_D_D:"true",npm_package_devDependencies_dotenv:"^16.4.5",npm_package_lint_staged____yml_yaml_md__0:"prettier --write",npm_lifecycle_script:"cross-env BUILD_ENV=gh-pages rsbuild build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"777129456",GITHUB_ACTIONS:"true",NODE_PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules/@rsbuild/core/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules/@rsbuild/core/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules/@rsbuild/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",npm_package_version:"0.5.0",npm_package_devDependencies__types_react:"^18.3.3",npm_lifecycle_event:"build:gh-pages",GITHUB_REF_PROTECTED:"false",npm_package_scripts_start_demo:"cross-env BUILD_ENV=demo rsbuild dev",npm_package_devDependencies_lint_staged:"^15.2.5",GITHUB_WORKSPACE:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",npm_package_author:"",npm_package_dependencies_lodash:"^4.17.21",GITHUB_SHA:"a660ff30150f7ae69db2458ed1dfdfb07643870b",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"onlyling",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_package_scripts_lint_ts:"tsc --noEmit && eslint src --ext .ts,.tsx",npm_package_license:"ISC",npm_package_dependencies_classnames:"^2.5.1",LEIN_HOME:"/usr/local/lib/lein",npm_package_scripts_commit:"npx git-cz",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",GITHUB_ACTOR_ID:"9999765",RUNNER_WORKSPACE:"/home/runner/work/web-template-rsbuild",npm_package_devDependencies__rsbuild_plugin_react:"^0.7.4",npm_package_devDependencies__types_webpack_env:"^1.18.5",npm_execpath:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/bin/pnpm.cjs",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_package_devDependencies_cross_env:"^7.0.3",npm_command:"run-script",PNPM_SCRIPT_SRC_DIR:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",BUILD_ENV:"gh-pages",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",npm_package_devDependencies__fruits_chain_prettier_config_preset:"^0.0.5",npm_package_lint_staged____ts_tsx__0:'bash -c "tsc -p ./tsconfig.json --noEmit"',npm_config_shamefully_hoist:"true",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",npm_package_dependencies_react:"^18.3.1",npm_package_lint_staged____ts_tsx__1:"eslint --fix",INIT_CWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",NODE_ENV:"production",REACT_APP_BASE_URL:"/api",REACT_APP_API_HOST:"/",REACT_ROUTER_MODE:"gh-pages"},p="gh-pages"===l?a.UT:a.VK,c={cssVar:!0};n.Z=()=>(0,s.jsx)(r.ZP,{locale:o.default,theme:c,children:(0,s.jsx)(_.Z,{children:(0,s.jsx)(p,{children:(0,s.jsx)(d.Z,{})})})})},42075:function(e,n,t){"use strict";t.d(n,{Kg:function(){return d},qv:function(){return a}});var s=t(52676),r=t(75271),_=t(5791);let o=(0,r.createContext)([]),i=()=>(0,r.useContext)(o),a=()=>{let e=(0,_.TH)(),n=i();return(0,r.useMemo)(()=>(0,_.fp)(n,e)||[],[e,n])},d=(0,r.memo)(e=>{let{routes:n}=e;return(0,s.jsx)(o.Provider,{value:n,children:(0,_.V$)(n)})})},52023:function(e,n,t){"use strict";var s=t(62758),r=t(75271),_=t(99008),o=t(36643),i=t(77055);n.Z=e=>{let[n,t]=(0,r.useState)(!0),a=(0,_.Z)(),d=(0,s.Z)(e||(()=>{}));return(0,r.useEffect)(()=>{let{fetchUser:e}=i.Z.getState();e().then(()=>o.Z.getState().updateAccess()).then(d).catch(a).finally(()=>{t(!1)})},[d,a]),n}},56767:function(e,n,t){"use strict";var s=t(62758),r=t(99008),_=t(77055);n.Z=()=>{let{setToken:e}=(0,_.Z)(),n=(0,r.Z)();return(0,s.Z)(()=>{new Promise(e=>{setTimeout(e,400)}).then(()=>{e(""),n()})})}},99008:function(e,n,t){"use strict";var s=t(62758),r=t(5791),_=t(65876);n.Z=()=>{let e=(0,r.s0)();return(0,s.Z)(()=>{e(_.R)})}},36553:function(e,n,t){"use strict";var s=t(52676),r=t(48670),_=t(78211),o=t(75271),i=t(96673);class a extends o.PureComponent{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){var t,s;null===(t=(s=this.props).onError)||void 0===t||t.call(s,e,n)}render(){if(this.state.error)return this.props.renderError?this.props.renderError({name:this.state.error.name,message:this.state.error.message,onReset:this.onClickReload}):(0,s.jsx)(i.Z,{onChangePathname:this.onClickReload,children:(0,s.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flex:1,overflow:"hidden"},children:(0,s.jsx)(r.ZP,{status:"warning",title:this.props.title||"\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~",subTitle:`${this.state.error.name}
${this.state.error.message}`,extra:(0,s.jsx)(_.ZP,{type:"primary",onClick:this.onClickReload,children:this.props.reloadText||"\u91CD\u65B0\u52A0\u8F7D"})})})});return this.props.children}constructor(...e){super(...e),this.state={error:null},this.onClickReload=()=>{this.setState({error:null})}}}n.Z=a},96673:function(e,n,t){"use strict";var s=t(62758),r=t(61934),_=t(43226),o=t.n(_),i=t(75271),a=t(5791);n.Z=(0,i.memo)(e=>{let{onChangePathname:n,children:t}=e,{pathname:_}=(0,a.TH)(),i=(0,s.Z)(n||o());return(0,r.Z)(()=>{i(_)},[i,_]),t})},37541:function(e,n,t){"use strict";var s=t(52676),r=t(48670),_=t(78211),o=t(5791),i=t(19537),a=t(68890);n.Z=e=>{let{homePathName:n,status:t}=e,d=(0,o.s0)();return(0,i.OL)(),(0,s.jsx)("div",{style:{flex:1,alignContent:"center",justifyContent:"center",height:"100%"},children:(0,s.jsx)(r.ZP,{status:t,title:t,subTitle:"403"===t?"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u65E0\u6743\u8BBF\u95EE...":"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u9875\u9762\u4E0D\u5B58\u5728...",extra:(0,s.jsx)(_.ZP,{style:{marginTop:24},type:"primary",onClick:()=>{d(n??a.Z.routerBasePath)},children:"\u8FD4\u56DE\u9996\u9875"})})})}},68890:function(e,n,t){"use strict";var s=t(4088);let r="/admin",{REACT_APP_BASE_URL:_,REACT_APP_API_HOST:o}={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",GIT_CLONE_PROTECTION_ACTIVE:"false",npm_package_dependencies_ahooks:"^3.8.0",npm_package_devDependencies__rsbuild_core:"^0.7.4",npm_package_devDependencies__types_node:"^20.14.2",npm_package_lint_staged____ts_tsx__2:"prettier --write",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_package_devDependencies__fruits_chain_stylelint_config_preset:"^0.1.3",npm_config_user_agent:"pnpm/9.3.0 npm/? node/v20.14.0 linux x64",CI:"true",npm_package_scripts_commitlint:"commitlint --edit",npm_package_scripts_lint_staged:"lint-staged --allow-empty",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",PIPX_HOME:"/opt/pipx",npm_package_scripts_start_dev:"cross-env BUILD_ENV=dev rsbuild dev",npm_node_execpath:"/opt/hostedtoolcache/node/20.14.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_package_scripts_start_prod:"cross-env BUILD_ENV=prod rsbuild dev",HOME:"/home/runner",npm_package_dependencies__ant_design_icons:"^5.3.7",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"onlyling",npm_package_devDependencies__fruits_chain_eslint_config_preset:"^0.3.23",GRADLE_HOME:"/usr/share/gradle-8.8",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.3.11579264",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"9999765",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_package_scripts_lint_style:"stylelint 'src/**/*.less'",SYSTEMD_EXEC_PID:"602",npm_package_dependencies_dayjs:"^1.11.11",npm_package_devDependencies_husky:"^9.0.11",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",npm_package_description:"",npm_package_dependencies_antd:"^5.18.0",npm_package_dependencies_react_router_dom:"6.3.0",npm_package_devDependencies_typescript:"~5.3.0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_package_scripts_build_dev:"cross-env BUILD_ENV=dev rsbuild build",npm_package_devDependencies__types_react_dom:"^18.3.0",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.10/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240603.1.0",npm_package_scripts_build_prod:"cross-env BUILD_ENV=prod rsbuild build",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.3/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",npm_package_dependencies_zustand:"^4.5.2",npm_package_prettier:"@fruits-chain/prettier-config-preset",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19748",GITHUB_WORKFLOW:"deploy gh-pages",_:"/home/runner/setup-pnpm/node_modules/.bin/pnpm",npm_package_scripts_start_test:"cross-env BUILD_ENV=test rsbuild dev",npm_package_devDependencies__commitlint_config_conventional:"^19.2.2",npm_package_commitlint_extends_0:"@commitlint/config-conventional",npm_package_scripts_build_gh_pages:"cross-env BUILD_ENV=gh-pages rsbuild build",npm_package_scripts_prepare:"husky",npm_package_lint_staged____js_jsx__0:"eslint --fix",npm_config_registry:"https://registry.npmmirror.com",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"9462381311",STATS_VMFE:"true",npm_package_devDependencies__types_lodash:"^4.17.5",npm_package_lint_staged____js_jsx__1:"prettier --write",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"a660ff30150f7ae69db2458ed1dfdfb07643870b",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"onlyling/web-template-rsbuild/.github/workflows/gh-pages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/dist/node-gyp-bin:/opt/hostedtoolcache/node/20.14.0/x64/bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_e86c6529-c42e-4c0d-90d6-681805400cc8",INVOCATION_ID:"3aa3faf7019f41fb8a3235b97dc8a9a8",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",npm_package_name:"web-template-rsbuild",npm_package_scripts_ncu:"npx npm-check-updates -u -x react-router-dom,typescript",NODE:"/opt/hostedtoolcache/node/20.14.0/x64/bin/node",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"13",GITHUB_TRIGGERING_ACTOR:"onlyling",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",npm_config_frozen_lockfile:"",npm_package_devDependencies__commitlint_cli:"^19.3.0",npm_package_devDependencies__rsbuild_plugin_less:"^0.7.4",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",npm_package_dependencies_react_dom:"^18.3.1",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 20",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"onlyling/web-template-rsbuild",STATS_D_D:"true",npm_package_devDependencies_dotenv:"^16.4.5",npm_package_lint_staged____yml_yaml_md__0:"prettier --write",npm_lifecycle_script:"cross-env BUILD_ENV=gh-pages rsbuild build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"777129456",GITHUB_ACTIONS:"true",NODE_PATH:"/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules/@rsbuild/core/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules/@rsbuild/core/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules/@rsbuild/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/@rsbuild+core@0.7.4/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/cross-env@7.0.3/node_modules:/home/runner/work/web-template-rsbuild/web-template-rsbuild/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",npm_package_version:"0.5.0",npm_package_devDependencies__types_react:"^18.3.3",npm_lifecycle_event:"build:gh-pages",GITHUB_REF_PROTECTED:"false",npm_package_scripts_start_demo:"cross-env BUILD_ENV=demo rsbuild dev",npm_package_devDependencies_lint_staged:"^15.2.5",GITHUB_WORKSPACE:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",npm_package_author:"",npm_package_dependencies_lodash:"^4.17.21",GITHUB_SHA:"a660ff30150f7ae69db2458ed1dfdfb07643870b",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"onlyling",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_package_scripts_lint_ts:"tsc --noEmit && eslint src --ext .ts,.tsx",npm_package_license:"ISC",npm_package_dependencies_classnames:"^2.5.1",LEIN_HOME:"/usr/local/lib/lein",npm_package_scripts_commit:"npx git-cz",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",GITHUB_ACTOR_ID:"9999765",RUNNER_WORKSPACE:"/home/runner/work/web-template-rsbuild",npm_package_devDependencies__rsbuild_plugin_react:"^0.7.4",npm_package_devDependencies__types_webpack_env:"^1.18.5",npm_execpath:"/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.3.0/node_modules/pnpm/bin/pnpm.cjs",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_package_devDependencies_cross_env:"^7.0.3",npm_command:"run-script",PNPM_SCRIPT_SRC_DIR:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",BUILD_ENV:"gh-pages",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",npm_package_devDependencies__fruits_chain_prettier_config_preset:"^0.0.5",npm_package_lint_staged____ts_tsx__0:'bash -c "tsc -p ./tsconfig.json --noEmit"',npm_config_shamefully_hoist:"true",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_6598cbd8-0a11-463d-a8bc-2dc8b4b86ed0",npm_package_dependencies_react:"^18.3.1",npm_package_lint_staged____ts_tsx__1:"eslint --fix",INIT_CWD:"/home/runner/work/web-template-rsbuild/web-template-rsbuild",NODE_ENV:"production",REACT_APP_BASE_URL:"/api",REACT_APP_API_HOST:"/",REACT_ROUTER_MODE:"gh-pages"};console.log("REACT_APP_BASE_URL => ",_),console.log("REACT_APP_API_HOST => ",o);n.Z={routerBasePath:"/",routerAdminPath:r,name:"\u6625\u5206\u6570\u636E\u670D\u52A1\u5E73\u53F0",logo:s}},17204:function(e,n,t){"use strict";var s=t(52676),r=t(75271),_=t(38751),o=t(24557);(0,_.createRoot)(document.getElementById("root")).render((0,s.jsx)(r.StrictMode,{children:(0,s.jsx)(o.Z,{})}))},25722:function(e,n,t){"use strict";t.d(n,{I:function(){return _}});var s=t(68890);let r=`${s.Z.routerAdminPath}/error-test`,_=`${r}/admin`},26426:function(e,n,t){"use strict";var s=t(52676),r=t(83456),_=t(25722),o=t(90450);n.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Home"}),(0,s.jsx)("p",{children:(0,s.jsx)(r.rU,{to:o.s,children:"go user list"})}),(0,s.jsx)("p",{children:(0,s.jsx)(r.rU,{to:`${o.s}lll`,children:"go 404"})}),(0,s.jsx)("p",{children:(0,s.jsx)(r.rU,{to:_.I,children:"go admin error test"})})]})},53647:function(e,n,t){"use strict";t(19608);var s=t(52676),r=t(97984),_=t(81589),o=t(68592),i=t(45456),a=t(78211),d=t(75271),l=t(5791),p=t(68890),c=t(77055),u=t(46632);n.Z=(0,d.memo)(()=>{let[e]=o.Z.useForm(),n=(0,l.s0)();return(0,s.jsxs)("div",{className:u.Z.page,children:[(0,s.jsx)("div",{className:u.Z.header,children:"\u6B22\u8FCE\u767B\u5F55"}),(0,s.jsx)("div",{className:u.Z.prompts,children:"24jieqi \u65D7\u4E0B\u6C34\u679C\u4EA7\u4E1A\u670D\u52A1\u4E00\u7AD9\u5F0F\u8FD0\u8425\u7BA1\u7406\u7CFB\u7EDF"}),(0,s.jsxs)(o.Z,{form:e,children:[(0,s.jsx)(o.Z.Item,{name:"phone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{validator:(e,n)=>n&&!function(e){let n=e.replace(/[^-|\d]/g,"");return/^((\+86)|(86))?(1)\d{10}$/.test(n)||/^0[0-9-]{10,13}$/.test(n)}(n)?Promise.reject(Error()):Promise.resolve(),message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"}],children:(0,s.jsx)(i.Z,{prefix:(0,s.jsx)(r.Z,{}),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",size:"large"})}),(0,s.jsx)(o.Z.Item,{name:"password",children:(0,s.jsx)(i.Z.Password,{prefix:(0,s.jsx)(_.Z,{}),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",size:"large"})}),(0,s.jsx)(a.ZP,{type:"primary",size:"large",block:!0,onClick:()=>{e.validateFields().then(e=>{let t=e=>{let{setToken:t}=c.Z.getState();t(e),n(p.Z.routerBasePath)};console.log("values => ",e),new Promise(e=>{setTimeout(e,500)}).then(()=>{t("token")})})},children:"\u767B\u5F55"})]})]})})},65876:function(e,n,t){"use strict";t.d(n,{R:function(){return o}});var s=t(52676),r=t(53647),_=t(79465);let o="/login";n.Z=()=>(0,s.jsx)(_.Z,{children:(0,s.jsx)(r.Z,{})})},79465:function(e,n,t){"use strict";var s=t(52676),r=t(75271),_=t(68890),o=t(31170);n.Z=(0,r.memo)(e=>{let{children:n}=e;return(0,s.jsxs)("div",{className:o.Z.login,children:[(0,s.jsxs)("div",{className:o.Z.portal,children:[(0,s.jsxs)("div",{className:o.Z.brand,children:[(0,s.jsx)("img",{className:o.Z.logo,src:_.Z.logo}),(0,s.jsx)("div",{className:o.Z.name,children:_.Z.name}),(0,s.jsx)("div",{className:o.Z.desc,children:"\u8FD0\u8425\u7BA1\u7406\u7CFB\u7EDF"})]}),(0,s.jsx)("img",{className:o.Z.bg,src:"http://dummyimage.com/1600x1600/EFF1FA/098"})]}),(0,s.jsx)("div",{className:o.Z.ctx,children:n})]})})},90450:function(e,n,t){"use strict";t.d(n,{s:function(){return _}});var s=t(68890);let r=`${s.Z.routerAdminPath}/user`,_=`${r}`},36643:function(e,n,t){"use strict";t(67049),t(67804),t(67475);var s=t(89535),r=t(38146),_=t(15589);let o=0,i=(0,s.Ue)((0,r.tJ)((e,n)=>({loading:!1,access:[],setAccess:n=>{e({access:n})},hasAccess:e=>{let{access:t}=n();return(Array.isArray(e)?e:[e]).every(e=>t.indexOf(e)>-1)},updateAccess:async()=>{e({loading:!0});let n=new Date().getTime();o=n,await new Promise(e=>{setTimeout(e,300)}),n===o&&e({loading:!1,access:[]})}}),{name:`${_.u2}_${_.i8}_access`}));n.Z=i},77055:function(e,n,t){"use strict";t(19608);var s=t(89535),r=t(38146),_=t(15589);let o=(0,s.Ue)((0,r.tJ)((e,n)=>({token:"",setToken:n=>{e({token:n})},refreshToken:async()=>{let{token:e}=n();if(!e)return Promise.reject(Error("\u7528\u6237\u672A\u767B\u5F55"))},user:{id:"",name:""},fetchUser:async()=>{let{token:t}=n();if(!t)return Promise.reject(Error("\u7528\u6237\u672A\u767B\u5F55"));let s={id:"_",name:"\u6A21\u62DF\u7528\u6237_xyz"};return e({user:s}),s}}),{name:`${_.u2}_${_.i8}_user`}));n.Z=o},15589:function(e){"use strict";e.exports=JSON.parse('{"u2":"web-template-rsbuild","i8":"0.5.0"}')}},n={};function t(s){var r=n[s];if(void 0!==r)return r.exports;var _=n[s]={exports:{}};return e[s].call(_.exports,_,_.exports,t),_.exports}t.m=e,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},(()=>{var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(s,r){if(1&r&&(s=this(s)),8&r||"object"==typeof s&&s&&(4&r&&s.__esModule||16&r&&"function"==typeof s.then))return s;var _=Object.create(null);t.r(_);var o={};e=e||[null,n({}),n([]),n(n)];for(var i=2&r&&s;"object"==typeof i&&!~e.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach(function(e){o[e]=function(){return s[e]}});return o.default=function(){return s},t.d(_,o),_}})(),t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];t.O=function(n,s,r,_){if(s){_=_||0;for(var o=e.length;o>0&&e[o-1][2]>_;o--)e[o]=e[o-1];e[o]=[s,r,_];return}for(var i=1/0,o=0;o<e.length;o++){for(var s=e[o][0],r=e[o][1],_=e[o][2],a=!0,d=0;d<s.length;d++)i>=_&&Object.keys(t.O).every(function(e){return t.O[e](s[d])})?s.splice(d--,1):(a=!1,_<i&&(i=_));if(a){e.splice(o--,1);var l=r();void 0!==l&&(n=l)}}return n}})(),t.p="/web-template-rsbuild/",(()=>{var e={980:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var r=s[0],_=s[1],o=s[2],i,a,d=0;if(r.some(function(n){return 0!==e[n]})){for(i in _)t.o(_,i)&&(t.m[i]=_[i]);if(o)var l=o(t)}for(n&&n(s);d<r.length;d++)a=r[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},s=self.webpackChunkweb_template_rsbuild=self.webpackChunkweb_template_rsbuild||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))})();var s=t.O(void 0,["126","361","118","154"],function(){return t("17204")});s=t.O(s)})();