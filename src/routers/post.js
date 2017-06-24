const Router = require('koa-router');

const router = new Router({
    prefix: '/feed'
});

router.get('/', async function(ctx) {
    await ctx.render('post');
});

module.exports = router;