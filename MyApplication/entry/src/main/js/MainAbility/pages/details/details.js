import ajax from '../../common/js/ajax';
import router from '@ohos.router'
import goods from '../../common/js/goods'
export default {
    data: {
        bookId:0,
        bookInfo:{},
        goods:goods,
        good: [],
        },
    onInit() {
        let bookId = router.getParams()['bookId'];
        if(!bookId){
            return router.back();//回到原来页面
        }
        this.bookId=bookId;
    },
    getBookInfo(){
        ajax.get({
            url:'http://124.71.79.186/index/book/info?bookid=' + this.bookId,
            success:resp=>{
                this.bookInfo=resp
                console.log(JSON.stringify(resp))
            }
        })
    },
    back(){
        router.back();
    },
}
