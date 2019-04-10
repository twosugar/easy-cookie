[![npm](https://www.npmjs.com/package/@sugarfish/easy-cookie)

### 安装
`npm i @sugarfish/easy-cookie --save`
### 使用
`import EC from '@sugarfish/easy-cookie'`
#### 查询cookie
`EC.lookCookie(name)`
#### 设置cookie
`EC.setCookie(name, content, expires)//名称，内容，过期时间(毫秒值，比如一天就为：24 * 60 * 60 * 1000)`
#### 删除cookie
`EC.deleteCookie(name)`
