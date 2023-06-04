export default {
    props:{
        goodsId:{default:0},
        name:{default:"洁柔粉Face百花香味纸面巾"},
        image:{default:"https://imgs.pupuapi.com/STORE_PRODUCT/2ca0b573c8a54977b23ba981063add56/1640594534879.gif"},
        newPrice:{default:10},
        num:{default:10},
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
