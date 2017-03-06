function card() {
    var config={
        link:init,
        templateUrl:'directives/card.html'
    }

    return config;

    function init(scope){
        scope.text="Hello World";
    }
}

app.directive('card', card);