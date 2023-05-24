import goods from '../../common/js/good_carts';
export default {
    data: {
        goods:goods,
    },
    computed:{
        totalPrice(){
            let p = 0;
            this.goods.forEach(v=>{
                if(v.checked){
                    p+= v.newPrice * v.num;
                }
            })
            return p;
        }
    },
    changeChecked(e){
        let d = e.detail;
        let index = this.goods.findIndex(v=>v.id === d.id);
        if(index >= 0 && this.goods.length){
            this.goods[index].checked=d.result;
        }
    },
    changeNum(e){
        let d = e.detail;
        let index = this.goods.findIndex(v=>v.id === d.id);
        if(index >= 0 && this.goods.length){
            this.goods[index].num=d.num;
        }
    },
    changeInc(e){
        let d = e.detail;
        let index = this.goods.findIndex(v=>v.id === d.id);
        if(index >= 0 && this.goods.length){
            this.goods[index].num=d.num;
        }
    },
    selectAll(e){
        let r=e.checked;
        this.goods.forEach(v=>v.checked = r);
    }
}
