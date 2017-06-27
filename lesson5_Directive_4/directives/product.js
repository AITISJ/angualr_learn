function product() {
    var config={
        link:init,
        templateUrl:'directives/product.html',
        replace:true,
        scope:{
            info:'='
        }
    }

    return config;

    function init(scope,element,attrs){
    }
}

app.directive('product', product);