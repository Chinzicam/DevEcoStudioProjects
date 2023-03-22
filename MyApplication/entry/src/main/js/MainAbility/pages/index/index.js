
export default {
    data: {
        title: "",
        image_swiper:[
            {path:"/image/1.jpg"},
            {path:"/image/2.jpg"},
            {path:"/image/3.jpg"},
        ],
        shop_swiper:[
            [{name:"Vue",img_path:"/image/a.jpg"},
                {name:"java",img_path:"/image/b.jpg"},
                {name:"php",img_path:"/image/c.jpg"},],
            [{name:"Vue",img_path:"/image/a.jpg"},
                {name:"java",img_path:"/image/b.jpg"},
                {name:"php",img_path:"/image/c.jpg"},],
            [{name:"Vue",img_path:"/image/a.jpg"},
                {name:"java",img_path:"/image/b.jpg"},
                {name:"php",img_path:"/image/c.jpg"},],
        ]

    },
    onInit() {
        this.title = "Hello World";
    }
}