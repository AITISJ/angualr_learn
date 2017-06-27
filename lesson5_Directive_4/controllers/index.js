index.$inject = ['$scope'];
function index(scope) {
    scope.products=[
        {
            title:"Scala技术详解",
            desc:"Scala是一门多范式的编程语言，"+
            "一种类似java的编程语言，设计初衷是实现可伸缩..",
            price:"￥100.00",
            imgPath:"/content/images/product1.png"
        },
        {
            title:"Java语言入门",
            desc:"Java是一门面向对象编程语言，不仅吸收了"+
            "C++语言的各种优点，还摒弃了C++里难..",
            price:"￥100.00",
            imgPath:"/content/images/product2.png"
        }
    ];
}

app.controller('index', index);