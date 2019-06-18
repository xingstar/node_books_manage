const Books = require("../models/Books");
class BooksController{
    constructor() {

    }

    async actionList(ctx, next){
        const books = new Books();

        const result = await books.getData({
            url: 'books/index'
        });

        console.log(result);
        ctx.body = await ctx.render('books/list',{
            data:result.data
        }); // 不需要在books前加/
    }

    // r=books/view&id=1
    async actionView(ctx, next){
        const books = new Books();
        console.log('query参数',ctx.request.query('id'));
        const result = await books.getData({
            url: 'books/view/&id='+ctx.request.query['id']
        });

        console.log("查看页面数据:",result);
        ctx.body = "查看";
    }
}

module.exports = BooksController;