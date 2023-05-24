export default {
    props:{
        goodsId:{default:0},
        name:{default:'Python数据结构和算法实战'},
        image:{default:'/common/image/1.png'},
        newPrice:{default:10},
        num:{default:20},
        checked:{default:true}
    },
    data: {
        buy_num:1,
    },
    onInit() {
        this.buy_num =this.num;
    },
    changeChecked(e){
        let r = e.checked;
        let data ={
            result:r,
            id:this.goodsId
        }
        this.$emit('changeChecked',data);
    },
    dec(){
        if(this.buy_num>1){
            this.buy_num--;
            let data ={
                num:this.buy_num,
                id:this.goodsId
            }
            this.$emit('changeNum',data);
        }
        else {

        }
    },
    inc(){
        this.buy_num++;
        let data ={
            num:this.buy_num,
            id:this.goodsId
        }
        this.$emit('changeInc',data);

    }
}
