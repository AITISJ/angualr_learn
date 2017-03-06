function article() {
    var config={
        link:init,
        templateUrl:'directives/article.html',
        scope:{
            title:'@',
            desc:'@',
            url:'@'
        }
    }

    return config;

    function init(scope){

    }
}

app.directive('article', article);