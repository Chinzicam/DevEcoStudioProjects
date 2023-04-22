import prompt from '@ohos.prompt';
export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = "Hello World";
    },
    toast(){
        prompt.showDialog({
            message:'消息框',
            button:500,
        })
    },
    showDialog(){
        this.$element('dialog').show()
    },
    showLoading(){
        let frames=[
            {
                transform:{
                rotate:'0deg'
                }
            },
            {
                transform:{
                    rotate:'360deg'
                }
            },
        ];//获得动画
        let options={
            duration:1500,//时长
            iterations:'Infinity',
            fill:'forwards',
            easing:'linear'
        }//动画选项
        let dom=this.$element('loading-image')//获取图片的dom元素
        let a=dom.animate(frames,options);//获取动画对象
        this.$element('loading-dialog').show()
        a.play();//播放动画
    },
}
