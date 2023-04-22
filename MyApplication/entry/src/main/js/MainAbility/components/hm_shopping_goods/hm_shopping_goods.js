export default {
    props:{
        goodsId:{default:0},
        name:{default:'Python数据结构和算法实战'},
        image:{default:'/common/image/7.jpg'},
        newPrice:{default:10},
        oldPrice:{default:50},
        num:{default:20},
        checked:{default:true}

    },
    data: {
        buynum:1,
    },
    onInit() {
        this.buynum =this.num;
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
        if(this.buynum>1){
            this.buynum--;
            let data ={
                num:this.buynum,
                id:this.goodsId
            }
            this.$emit('changeNum',data);
        }
        else {

        }
    },
    inc(){
        this.buynum++;
        let data ={
            num:this.buynum,
            id:this.goodsId
        }
        this.$emit('changeInc',data);

    }
}
