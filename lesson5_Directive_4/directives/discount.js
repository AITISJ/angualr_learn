//discount.js
function discount() {
    var config={
        link:init,
        restrict: 'A'
    }

    return config;

    function init(scope,element,attrs){
        var priceStr=element.isolateScope().info.price;
        priceStr=priceStr.replace('￥','');
        var price=new Number(priceStr)*new Number(attrs.discount);
        element.children().eq(1).children().eq(2).remove();
        element.children().eq(1).append('<div class="originalPrice">原价：<del>'+priceStr+'</del>');
        element.children().eq(1).append('<div class="price">促销价:<span>'+price+'</span></div>');
    }
}

app.directive('discount', discount);