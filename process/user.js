const {query} = require('../utils/query')
const {
    QUERY_TABLE,
    INSERT_TABLE,
    UPDATE_TABLE,
    DELETE_TABLE
} = require('../sql/user')

// 查询
let userTable = async (ctx, next) => {
    let table = await query(QUERY_TABLE('user'))
    ctx.body = table
}

// 新增
let userAdd = async (ctx, next) => {
    let data = ctx.request.body
    let keys = []
    let vals = []
    for (item in data) {
        keys.push(item)
        vals.push(JSON.stringify(data[item]))
    }
    let addData = {
        key: keys.join(','),
        val: vals.join(',')
    }
    let sqlRes = await query(INSERT_TABLE('user', addData))
    ctx.body = sqlRes
}

// 修改
let userModify = async (ctx, next) => {
    let data = ctx.request.body
    let where = {
        primaryKey: "user_id",
        primaryVal: JSON.stringify(data.user_id)
    }
    delete data.user_id
    let modifyData = `user_name="${data.user_name}",user_phone="${data.user_phone}"`
    let sqlRes = await query(UPDATE_TABLE('user', where, modifyData))
    ctx.body = sqlRes
}

// 删除
let userDelete = async (ctx, next) => {
    let data = ctx.request.body
    let where = {
        primaryKey: "user_id",
        primaryVal: data.user_id
    }
    let sqlRes = await query(DELETE_TABLE('user', where))
    ctx.body = sqlRes
}

const method = {
    userTable, // 查找数据
    userAdd,  // 添加数据
    userModify,  // 删除数据
    userDelete   // 查找数据
}

module.exports = method;
