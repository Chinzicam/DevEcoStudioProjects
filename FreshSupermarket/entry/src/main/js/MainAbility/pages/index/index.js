export default {
    data: {
        title: "",
        image_swiper:[
            {path:"/image/1.png"},
            {path:"/image/1.png"},
            {path:"/image/1.png"},
        ],
        good_classify:[
            [   {name:"水果",img_path:"/image/水果.png"},
                {name:"蔬菜",img_path:"/image/蔬菜.png"},
                {name:"肉禽奶",img_path:"/image/肉禽奶.png"},
                {name:"海鲜水产",img_path:"/image/海鲜水产.png"},
                {name:"粮油调味",img_path:"/image/粮油调味.png"},],
            [{  name:"熟食卤味",img_path:"/image/熟食卤味.png"},
                {name:"冰品面点",img_path:"/image/冰品面点.png"},
                {name:"乳品烘焙",img_path:"/image/乳品烘焙.png"},
                {name:"酒水冲饮",img_path:"/image/酒水冲饮.png"},
                {name:"休闲零食",img_path:"/image/休闲零食.png"},]
        ],
        more_classify:[
            [   {name:"时尚",img_path:"/image/时尚.png"},
                {name:"火锅季",img_path:"/image/火锅季.png"},
                {name:"洗洁精",img_path:"/image/洗洁精.png"},
                {name:"方便菜",img_path:"/image/方便菜.png"},
                {name:"鲜花",img_path:"/image/鲜花.png"},
                {name:"时尚",img_path:"/image/时尚.png"},
                {name:"火锅季",img_path:"/image/火锅季.png"},
                {name:"洗洁精",img_path:"/image/洗洁精.png"},
                {name:"方便菜",img_path:"/image/方便菜.png"},
                {name:"鲜花",img_path:"/image/鲜花.png"},

            ],
        ]
    },

    onInit() {
        this.title = this.$t('strings.world');
    }
}



