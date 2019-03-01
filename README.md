###安装
`npm i @sugarfish/easy-cookie --save`
###使用
`import EC from '@sugarfish/easy-cookie'`
####查询cookie
`EC.lookCookie(name)`
####设置cookie
`EC.setCookie(name, content, expires)//名称，内容，过期时间`
####删除cookie
`EC.deleteCookie(name)`