import categories from '../../common/js/categories'
import goods from '../../common/js/goods'
import ajax from '../../common/js/ajax'
import router from '@ohos.router'
export default {
    data: {
        title: "",
        categories:[],
        rootCategories:[],
        subCategories:[],
        goods:goods,
        good:[],
        inActiveId:0,
        bookList:[],
    },
    onInit() {
        this.getAllCategory();
    },

    getAllCategory(){
        ajax.get({
            url:'http://124.71.79.186/index/category/getList',
            success:resp=>{
                console.log(JSON.stringify(resp))
                this.categories = resp;
                this.rootCategories = this.getCategories(0);//找一级目录
                this.inActiveId = this.rootCategories[0].id;
                this.subCategories = this.getCategories(this.inActiveId)
                let cid =this.subCategories[0].id;
                this.getBookList(cid);
            }
        })
    },
    getBookList(cid){
        ajax.get({
            url:'http://124.71.79.186/index/book/getList?cid=' + cid,
            success:resp=>{
                this.bookList=resp
                console.log(JSON.stringify(resp))
            }
        })
    },
    getCategories(pid) {
        let arr=[]
        for (let i = 0; i < this.categories.length; i++) {
            let c=this.categories[i]
            if(c.pid===pid)
            {
                arr.push(c)
            }
        }
        return arr
    },
    getgood(pid) {
        let brr=[]
        for (let i = 0; i < this.goods.length; i++) {
            let c=this.goods[i]
            if(c.pid===pid)
            {
                brr.push(c)
            }
        }
        return brr
    },
    toBookDetail(bookId){//转到详情页面
        router.push({
            url:'pages/details/details',
            params:{bookId}
        })
    },
    changeSubCategory(cid){
        this.getBookList(cid);
    },
    changeRootCategory(id){
        this.inActiveId = id;
        this.subCategories = this.getCategories(id);
        let cid =this.subCategories[0].id;
        this.getBookList(cid);
        //this.good = this.getgood(id)
    }
}
