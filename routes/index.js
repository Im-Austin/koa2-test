// 初始化数据库，开启自动创建表
const {CREATE_TABLE} = require('../sql/user')
// query(CREATE_TABLE)


// 注册路由
let users = require('./users')

const router = require('koa-router')(
    users
)

module.exports = router
