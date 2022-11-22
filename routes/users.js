const router = require('koa-router')()

router.prefix('/users')
const {
    userTable, // 查找数据
    userAdd,  // 添加数据
    userModify,  // 删除数据
    userDelete   // 查找数据
} = require('../process/user');

router.get('/table', userTable);
router.post('/add', userAdd);
router.post('/modify', userModify);
router.post('/delete', userDelete);

module.exports = router;
