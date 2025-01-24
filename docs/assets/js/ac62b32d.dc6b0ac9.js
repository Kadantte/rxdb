"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[9192],{9585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(4848),i=n(8453);const r={title:"Websocket Replication",slug:"replication-websocket.html"},a="Websocket Replication",s={id:"replication-websocket",title:"Websocket Replication",description:"With the websocket replication plugin, you can spawn a websocket server from a RxDB database in Node.js and replicate with it.",source:"@site/docs/replication-websocket.md",sourceDirName:".",slug:"/replication-websocket.html",permalink:"/replication-websocket.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Websocket Replication",slug:"replication-websocket.html"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Replication",permalink:"/replication-graphql.html"},next:{title:"RxDB's CouchDB Replication Plugin",permalink:"/replication-couchdb.html"}},c={},l=[{value:"Starting the Websocket Server",id:"starting-the-websocket-server",level:2},{value:"Connect to the Websocket Server",id:"connect-to-the-websocket-server",level:2},{value:"Customize",id:"customize",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"websocket-replication",children:"Websocket Replication"}),"\n",(0,o.jsx)(t.p,{children:"With the websocket replication plugin, you can spawn a websocket server from a RxDB database in Node.js and replicate with it."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The websocket replication plugin does not have any concept for authentication or permission handling. It is designed to create an easy ",(0,o.jsx)(t.strong,{children:"server-to-server"})," replication. It is ",(0,o.jsx)(t.strong,{children:"not"})," made for client-server replication. Make a pull request if you need that feature."]})}),"\n",(0,o.jsx)(t.h2,{id:"starting-the-websocket-server",children:"Starting the Websocket Server"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport {\n    startWebsocketServer\n} from 'rxdb/plugins/replication-websocket';\n\n// create a RxDatabase like normal\nconst myDatabase = await createRxDatabase({/* ... */});\n\n// start a websocket server\nconst serverState = await startWebsocketServer({\n    database: myDatabase,\n    port: 1337,\n    path: '/socket'\n});\n\n// stop the server\nawait serverState.close();\n"})}),"\n",(0,o.jsx)(t.h2,{id:"connect-to-the-websocket-server",children:"Connect to the Websocket Server"}),"\n",(0,o.jsx)(t.p,{children:"The replication has to be started once for each collection that you want to replicate."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import {\n    replicateWithWebsocketServer\n} from 'rxdb/plugins/replication-websocket';\n\n// start the replication\nconst replicationState = await replicateWithWebsocketServer({\n    /**\n     * To make the replication work,\n     * the client collection name must be equal\n     * to the server collection name.\n     */\n    collection: myRxCollection,\n    url: 'ws://localhost:1337/socket'\n});\n\n// stop the replication\nawait replicationState.cancel();\n"})}),"\n",(0,o.jsx)(t.h2,{id:"customize",children:"Customize"}),"\n",(0,o.jsxs)(t.p,{children:["We use the ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/ws",children:"ws"})," npm library, so you can use all optional configuration provided by it.\nThis is especially important to improve performance by opting in of some optional settings."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(6540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);