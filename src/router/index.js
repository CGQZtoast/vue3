import { router } from '../modules/router'

// 路由守卫
router.beforeEach(v => {
    console.log(v)
})

