"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[6797],{9263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(4848),r=a(8453);const i={title:"Fastest RxDB Starts - Localstorage Meta Optimizer",slug:"rx-storage-localstorage-meta-optimizer.html",description:"Wrap any RxStorage with localStorage metadata to slash initial load by up to 200ms. Unlock speed with this must-have RxDB Premium plugin."},n="RxStorage Localstorage Meta Optimizer",s={id:"rx-storage-localstorage-meta-optimizer",title:"Fastest RxDB Starts - Localstorage Meta Optimizer",description:"Wrap any RxStorage with localStorage metadata to slash initial load by up to 200ms. Unlock speed with this must-have RxDB Premium plugin.",source:"@site/docs/rx-storage-localstorage-meta-optimizer.md",sourceDirName:".",slug:"/rx-storage-localstorage-meta-optimizer.html",permalink:"/rx-storage-localstorage-meta-optimizer.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Fastest RxDB Starts - Localstorage Meta Optimizer",slug:"rx-storage-localstorage-meta-optimizer.html",description:"Wrap any RxStorage with localStorage metadata to slash initial load by up to 200ms. Unlock speed with this must-have RxDB Premium plugin."},sidebar:"tutorialSidebar",previous:{title:"Sharding RxStorage \ud83d\udc51",permalink:"/rx-storage-sharding.html"},next:{title:"Seamless Electron Storage with RxDB",permalink:"/electron.html"}},l={},c=[{value:"Usage",id:"usage",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"rxstorage-localstorage-meta-optimizer",children:"RxStorage Localstorage Meta Optimizer"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," Localstorage Meta Optimizer is a wrapper around any other RxStorage. The wrapper uses the original RxStorage for normal collection documents. But to optimize the initial page load time, it uses ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage?retiredLocale=de",children:"localstorage"})," to store the plain key-value metadata that RxDB needs to create databases and collections. This plugin can only be used in browsers."]}),"\n",(0,o.jsx)(t.p,{children:"Depending on your database usage and the collection amount, this can save about 200 milliseconds on the initial pageload. It is recommended to use this when you create more than 4 RxCollections."}),"\n",(0,o.jsx)(t.admonition,{title:"Premium",type:"note",children:(0,o.jsxs)(t.p,{children:["This plugin is part of ",(0,o.jsx)(t.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"}),". It is not part of the default RxDB module."]})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["The meta optimizer gets wrapped around any other RxStorage. It will than automatically detect if an RxDB internal storage instance is created, and replace that with a ",(0,o.jsx)(t.a,{href:"/articles/localstorage.html",children:"localstorage"})," based instance."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import {\n    getLocalstorageMetaOptimizerRxStorage\n} from 'rxdb-premium/plugins/storage-localstorage-meta-optimizer';\n\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n\n/**\n * First wrap the original RxStorage with the optimizer.\n */\nconst optimizedRxStorage = getLocalstorageMetaOptimizerRxStorage({\n\n    /**\n     * Here we use the dexie.js RxStorage,\n     * it is also possible to use any other RxStorage instead.\n     */\n    storage: getRxStorageDexie()\n});\n\n/**\n * Create the RxDatabase with the wrapped RxStorage. \n */\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    storage: optimizedRxStorage\n});\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>s});var o=a(6540);const r={},i=o.createContext(r);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);