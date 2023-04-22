import categories from '../../common/js/categories';
import shop_introduce from '../../common/js/shop_introduce';
//console.log(categories);
export default {
    data: {
        categories:categories,
        rootCategories:[],
        subCategories:[],
        InActiveId:0,
        shop_introduce:shop_introduce,
    },
    onInit() {
        this.rootCategories=this.getRootCategory(0);
        this.InActiveId=this.rootCategories[0].id;
        this.subCategories=this.getRootCategory(this.InActiveId);
    },
    getRootCategory(pid){
        let arr=[];
        for (let i = 0; i < this.categories.length; i++) {
            let c=this.categories[i];
            if(c.pid === pid){
                arr.push(c);
            }
        }
        return arr;
    },
    changeRootCate(id){
        this.InActiveId=id;
        this.subCategories=this.getRootCategory(id);
    }
}
