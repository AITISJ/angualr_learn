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
        element.find('.price').replaceWith('<div class="price">原价：<span>{{info.price}}</span>促销价<span>'+null+'</span></div>');
    }
}

app.directive('discount', discount);